import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Active</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
          {props.data.map((prop)=>(
            <tr key={prop.id}>
              <td>{prop.id}</td>
              <td>{prop.confirmed}</td>
              <td>{prop.deaths}</td>
              <td>{prop.recovered}</td>
              <td>{prop.active}</td>
              <td>{prop.date}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  )
}
export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:8080/covids');
    const data = response.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: [],
      },
    };
  }
}