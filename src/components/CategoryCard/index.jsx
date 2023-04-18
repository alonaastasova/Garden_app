import React from 'react'
import { Link } from 'react-router-dom';
import s from './style.module.css'

export default function CategoryCard({id, image, title}) {

    const link = `categories/${id}`;
    const imgLink = `http://localhost:3333${image}`

  return (
    <Link to={link} className={s.categoryCard}>
        <img src={imgLink} alt="categoryPhoto" />
        <p>{title}</p>
    </Link>
  )
}
