import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function SaleBlock() {

    const products = useSelector(({products}) => products);

  return (
    <section className={s.salesContainer}>
        <div className={s.header}>
            <p>Sale</p>
        </div>
        <div className={s.cardContainer}>
            {
                products
                .filter(({id, discont_price}) => discont_price != null && id <= 7)
                .map(elem => <ProductCard key={elem.id} {...elem} />)
            }
            <div className={s.moreButton}>
                <Link to='/sale'>
                <button>View more</button>
                </Link>
            </div>
        </div>
    </section>
  )
}
