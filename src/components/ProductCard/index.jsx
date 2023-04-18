import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import { basketAddAction } from '../../store/reducer/basketReducer';
import { useDispatch } from 'react-redux';

export default function ProductCard({id, image, title, price, discont_price}) {

    const link = `/product/${id}`;
    const imgLink = `http://localhost:3333${image}`;
    
    const dispatch = useDispatch();

    const discount_percent = (price - discont_price) / price * 100;

  return (
    <div className={s.productCard}>
        <Link to={link} className={s.cardBlock}>
          <img src={imgLink} alt="productPhoto" className={s.productImg} />
            <div className={s.priceBlock}>
              <p className={s.priceP}>{discont_price === null ?  price + "\uFE69" : discont_price + "\uFE69"} </p>
                <p className={s.oldPriceP}>{discont_price === null ? '' : price + '$'}</p>
                <p className={s.percentDiscountP}>{discont_price === null ? '' : `-${discount_percent.toFixed(0)}%`}</p>
            </div>
          <p className={s.titleP}>{title}</p>
        </Link>
        <button onClick={() => dispatch(basketAddAction(id))}>Add to cart</button>
    </div>
  )
}
