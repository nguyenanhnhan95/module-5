import { Routes,Route, BrowserRouter } from "react-router-dom";
import Student from "./components/Student";
import React from "react";

function App(){
  return(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path={`/students`} element={<Student/>}/>
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
export default App;