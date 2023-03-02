import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//Router//
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify//
import { ToastContainer } from 'react-toastify';

//Componentes//
import Navbar from "./components/Navbar/Navbar";
import Cardcontainer from "./components/CardContainer/CardContainer";
import { Itemdetailcontainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Itemlistcontainer } from './components/ItemListContainer/ItemListContainer';
import { Contact } from './components/Contact/Contact';
import { Cart } from './components/Cart/Cart';

//Context//
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Cardcontainer />} />
            <Route path='/item/:id' element={<Itemdetailcontainer />} />
            <Route path='/category/:nombreCategoria' element={<Itemlistcontainer />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <ToastContainer />
        </DarkModeProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
