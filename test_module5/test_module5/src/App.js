import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./compoments/Music";
import AddNewMusic from "./compoments/AddNewMusic";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Music/>}/>
      <Route path="/create" element={<AddNewMusic/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
