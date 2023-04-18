import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import angle from '../../media/angle-right.png'
import { useDispatch, useSelector } from 'react-redux';
import BasketCard from '../../components/BasketCard';
import { basketClearAction } from '../../store/reducer/basketReducer';

export default function BasketPage() {
  
  const {basket, products} = useSelector((state) => state);
  const dispatch = useDispatch();

  let data = basket.map((item) => {
    const product = products.find(({id}) => id === item.id);
    return {...product, ...item}
  });

  const totalSum = data.reduce((acc, {count, price}) => acc + count * price, 0);

  const onSubmit = event => {
    event.preventDefault();
    const {number} = event.target;

    fetch('http://localhost:3333/order/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({phone: number.value})
    })
    .then(() => {
      console.log('Data completely sent');
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    dispatch(basketClearAction())
    number.value = '';
  }

  return (
    <div className={s.mainBlock}>
      <div className={s.firstBlock}>
        <div className={s.header}>
          <p>Shopping cart</p>
        </div>
        <div className={s.backButton}>
          <Link>
          <p>Back to the store</p>
          <img src={angle} alt="angle" />
          </Link>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.rightBlock}>
          {
            data.length === 0 ?
            <p className={s.info}>Empty</p> :
            data.map(elem => <BasketCard key={elem.id} {...elem}/>)
          }
        </div>
        <div className={s.leftBlock}>
          <h2>Order details</h2>
          <div className={s.totalAmount}>
            <p className={s.text}>Total</p>
            <p className={s.price}>{totalSum}&#xfe69;</p>
          </div>
          <form onSubmit={onSubmit} className={s.form}>
            <input type="text" name='number' placeholder='Phone number' />
            <button>Order</button>
          </form>
        </div>
    </div>
    </div>
  )
}
