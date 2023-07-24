
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookComponent from './components/BookComponent';
import AddNewBook from './components/AddNewBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BookComponent/>}/>
      <Route path='/add' element={<AddNewBook/>}/>
      <Route path='/edit/:id' element={<EditBook/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
