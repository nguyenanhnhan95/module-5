import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Customer from "./compoment/Customer";
import AddNewCustomer from "./compoment/AddNewCustomer";


function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/create" element={<AddNewCustomer/>}/>
      <Route path="/" element={<Customer/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
  
}

export default App;
