import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Cardcontainer from "./components/CardContainer/CardContainer";
import { Itemdetailcontainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Itemlistcontainer } from './components/ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Cardcontainer/>}/> 
          <Route path='/item/:id' element={<Itemdetailcontainer/>}/> 
          <Route path='/category/:nombreCategoria' element={<Itemlistcontainer/>}/>
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
