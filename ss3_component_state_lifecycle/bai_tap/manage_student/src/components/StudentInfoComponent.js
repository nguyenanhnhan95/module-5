import React from "react";


class StudentComponent extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
      const {students} =this.props
      return(
        <table >
    <thead>
      <tr>
        <th>Id</th>
        <th>Company</th>
        <th>Country</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      {students.map(student => (
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.Age}</td>
          <td>{student.Address}</td>
        </tr>
      ))}
    </tbody>
  </table>
      );
    }
}
export default StudentComponent;