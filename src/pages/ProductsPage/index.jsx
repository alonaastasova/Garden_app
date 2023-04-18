import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import s from './style.module.css';
import ProductAction from '../../components/ProductAction';

export default function ProductsPage() {

  const {id} = useParams();
  const products = useSelector(({products}) => products);
  const category = useSelector(({category}) => category.find(elem => elem.id === +id));
  const title = id === undefined ? 'All products' : category.title;

  return (
    <section className={s.productsPage}>
      <p className={s.header}>{title}</p>
      <ProductAction />
      <div className={s.productsContainer}>
        {
          id === undefined ?
          products
          .filter(({show}) => Object.values(show).every(item => item))
          .map(product => <ProductCard key={product.id} {...product} />)
          :
          products
          .filter(elem => elem.categoryId === +id)
          .filter(({show}) => Object.values(show).every(item => item))
          .map(product => <ProductCard key={product.id} {...product} />) 
        }
      </div>
    </section>
  )
}
