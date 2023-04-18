import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import s from './style.module.css';
import { basketAddAction } from '../../store/reducer/basketReducer';

export default function DescriptionPage() {

    const dispatch = useDispatch();
    const {id} = useParams();

    const products = useSelector(({products}) => products);
    const product = products.find(elem => elem.id === +id);
    const imgLink = `http://localhost:3333${product.image}`;
    const discount_percent = (product.price - product.discont_price) / product.price * 100;

  return (
    <div>
        {
            products.length === 0 ? <p>Loading...</p> 
            : (
                <div className={s.card}>
                    <div className={s.leftBlock}>
                    <p className={s.header}>{product.title}</p>
                        <img src={imgLink} alt="productImage" />
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.priceBlock}>
                            <p className={s.priceP}>{product.discont_price === null ?  product.price + "\uFE69" : product.discont_price + "\uFE69"} </p>
                            <p className={s.oldPriceP}>{product.discont_price === null ? '' : product.price + '$'}</p>
                            <p className={s.percentDiscountP}>{product.discont_price === null ? '' : `-${discount_percent.toFixed(0)}%`}</p>
                        </div>
                        <button onClick={() => dispatch(basketAddAction(product.id))}>To cart</button>
                        <div className={s.descriptionBlock}>
                            <p id={s.header}>Description</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}
