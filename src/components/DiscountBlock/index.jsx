import React from 'react';
import gnomeImg from '../../media/gnome.png';
import s from './style.module.css'

export default function DiscountBlock() {

    const onSubmit = event => {
        event.preventDefault();
        const {number} = event.target;
    
        fetch('http://localhost:3333/sale/send', {
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
    
        number.value = '';
      }

  return (
    <section className={s.container}>
        <div>
            <img src={gnomeImg} alt="gnomeImage" />
        </div>
        <div className={s.infoContainer}>
            <div className={s.infoHeaders}>
                <h2>5% off</h2>
                <h3>on the first order</h3>
            </div>
            <form onSubmit={onSubmit} className={s.inputElements}>
                <input type="text" name='number' defaultValue="+49" />
                <button>Get a discount</button>
            </form>
        </div>
    </section>
  )
}
