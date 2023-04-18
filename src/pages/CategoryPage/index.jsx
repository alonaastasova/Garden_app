import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryPage() {

  const categories = useSelector(({category}) => category);

  return (
    <section className={s.categories}>
      <p className={s.header}>Categories</p>
      <div className={s.categoryContainer}>
        {
          categories
          .map(({title, image, id}) => (
            <Link to={`${id}`} className={s.categoryCard}>
              <img src={`http://localhost:3333${image}`} alt="categoryPhoto" />
              <p>{title}</p>
            </Link>
          ))
        }
      </div>
    </section>
  )
}
