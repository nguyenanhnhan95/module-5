
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Facility from './components/Facility';
import ManageService from './components/ManageService';
import ManageContract from './components/ManageContract';
import ManageCustomer from './components/ManageCustomer';
import AddNewCustomer from './components/AddNewCustomer';
import AddNewService from './components/AddNewService';
import AddNewContract from './components/AddNewContract';
import ServiceDetail from './components/ServiceDetail';
function App() {
  return (
  <div>
    <Header/>
    {/* <Facility/> */}
    {/* <ManageContract/> */}
    {/* <ManageService/> */}
    {/* <AddNewCustomer/> */}
    <ServiceDetail/>
    <Footer/>
  </div>
  );
}

export default App;
