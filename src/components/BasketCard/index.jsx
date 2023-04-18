import React from 'react';
import s from './style.module.css';
import plus from '../../media/plus.png';
import minus from '../../media/minus.png'
import { useDispatch } from 'react-redux';
import { basketDecrementAction, basketDeleteAction, basketIncrementAction } from '../../store/reducer/basketReducer';

export default function BasketCard({id, count, title, image, price, discont_price}) {

  const imgLink = `http://localhost:3333${image}`;
  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <div className={s.cardArea}>
        <img src={imgLink} alt="productPhoto" />
        <div className={s.secondBlock}>
          <p>{title}</p>
          <div className={s.countButton}>
            <button onClick={() => dispatch(basketDecrementAction(id))}>
              <img src={minus} alt="minus" />
            </button>
            <p>{count}</p>
            <button onClick={() => dispatch(basketIncrementAction(id))}>
              <img src={plus} alt="minus" />
            </button>
          </div>
        </div>
        <div className={s.priceBlock}>
          <p className={s.newPrice}>{price}&#xfe69;</p>
          <p className={s.oldPrice}>{discont_price !== null ? `${discont_price}$` : ''}</p>
        </div>
      </div>
      <button onClick={() => dispatch(basketDeleteAction(id))} className={s.deleteButton}>&#x2715;</button>
    </div>
  )
}
