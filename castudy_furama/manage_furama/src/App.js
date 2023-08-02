
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import EditService from './components/EditService';
import EditCustomer from './components/EditCustomer';
function App() {
  return (
  <div>
    <StrictMode>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Facility/>}/>
            <Route path='/services' element={<ManageService/>}/>
            <Route path='/customers' element={<ManageCustomer/>}/>
            <Route path='/contracts' element={<ManageContract/>}/>
            <Route path='/detail/:id' element={<ServiceDetail/>}/>
            <Route path='/newservice' element={<AddNewService/>}/>
            <Route path='/newcustomer' element={<AddNewCustomer/>}/>
            <Route path='/editcustomer/:id' element={<EditCustomer/>}/>
            <Route path='/editservice/:id' element={<EditService/>}/>
          </Routes>
    {/* <ManageContract/> */}
    {/* <ManageService/> */}
    {/* <AddNewCustomer/> */}
    {/* <ServiceDetail/> */}
          <Footer/>
          </BrowserRouter>
    </StrictMode>
  </div>
  );
}

export default App;
