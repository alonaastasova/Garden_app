import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import s from './style.module.css';
import { checkDiscountProductsAction, priceFilterProductsAction, sortProductsAction } from '../../store/reducer/productsReducer';

export default function ProductAction() {

    const dispatch = useDispatch();
    const [price, setPrice] = useState({min: -Infinity, max: Infinity});

    const setMaxPrice = (event) => {
      setPrice(pre => ({...pre, max: +event.target.value || Infinity}));
    };

    const setMinPrice = (event) => {
      setPrice(pre => ({...pre, min: +event.target.value || -Infinity}));
      dispatch(priceFilterProductsAction(price))
    };

    const selectOnchange = event => {
        const value = event.target.value;
        dispatch(sortProductsAction(+value))
    }

    useEffect(()=>{
        dispatch(priceFilterProductsAction(price))
    }, [price])

    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked)
        dispatch(checkDiscountProductsAction(checked))
    }

  return (
    <div className={s.search}>
        <div className={s.priceBlock}>
            <p>Price</p>
            <input type="number" placeholder='from' onChange={setMinPrice}/>
            <input type="number" placeholder='to' onChange={setMaxPrice}/>
        </div>
        <div className={s.checkBlock}>
            <p>Discounted items</p>
            <input type="checkbox" name="checkbox" value={checked} onChange={handleChange}/>
        </div>
        <div className={s.sortBlock}>
            <p>Sorted</p>
            <select onChange={selectOnchange}>
                <option value="0">&#8943;</option>
                <option value="1">Price(Low to High)</option>
                <option value="2">Price(High to Low)</option>
            </select>
        </div>
    </div>
  )
}
