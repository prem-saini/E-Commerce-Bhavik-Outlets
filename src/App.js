import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Signup from './auth/Signup';
import AllProduct from './component/AllProduct';
import Home from './component/Home';
import CategoriesItempage from './component/CategoriesItempage';
import Singlepage from './component/Singlepage';
import AddToCart from './component/AddToCart';
import Footer from './component/Footer';
import Header from './component/Navbar';

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/allproduct' element={<AllProduct />} />
        <Route path="/singlepage/:id" element={<Singlepage />} />
        <Route path='/categoriesitempage' element={<CategoriesItempage />} />
        <Route path='/addtocart' element={<AddToCart />} />
      </Routes>
      <hr className='hr_line' />
      <Footer />
    </>
  );
}

export default App;
