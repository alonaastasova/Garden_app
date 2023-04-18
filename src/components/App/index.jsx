import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import NotFoundPage from '../../pages/NotFoundPage';
import CategoryPage from '../../pages/CategoryPage';
import ProductsPage from '../../pages/ProductsPage';
import Footer from '../Footer';
import Nav from "../Nav";
import './index.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadCategories } from '../../store/asyncActions/loadCategories';
import { loadProducts } from '../../store/asyncActions/loadProducts';
import SalePage from '../../pages/SalePage';
import DescriptionPage from '../../pages/DescriptionPage';
import BasketPage from '../../pages/BasketPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories)
    dispatch(loadProducts)
  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/categories' element={<CategoryPage />}/>
        <Route path='/categories/:id' element={<ProductsPage />}/>
        <Route path='/products/all' element={<ProductsPage />}/>
        <Route path='/product/:id' element={<DescriptionPage />}/>
        <Route path='/sale' element={<SalePage />}/>
        <Route path='/basket' element={<BasketPage />}/>
        <Route path='/*' element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
