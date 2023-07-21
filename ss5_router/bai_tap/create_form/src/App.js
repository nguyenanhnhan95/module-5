
import { Route, Routes } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import React from "react";
import ShowList from "./components/ShowList";
function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<ShowList/>}/>
      <Route path="/list/new" element={<CreateForm/>} />
    </Routes>
    </>
  );
}
export default App;