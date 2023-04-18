import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../CategoryCard';
import s from './style.module.css'
import { Link } from 'react-router-dom';

export default function CatalogueBlock() {

    const categories = useSelector(({category}) => category);

    const onClick = () => {

    }

  return (
    <section className={s.container}>
        <div className={s.header}>
            <p>Catalogue</p>
            <Link to='/categories'>
                <button >All categories</button>
            </Link>
        </div>
        <div className={s.cardContainer}>
            {
                categories
                .filter(({id}) => id <= 4)
                .map(elem => <CategoryCard key={elem.id} {...elem} />)
            }
        </div>
    </section>
  )
}
