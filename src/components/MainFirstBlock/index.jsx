import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function MainFirstBlock() {
  return (
    <div className={s.container}>
        <div className={s.info}>
            <h2>Sale</h2>
            <h3>New season</h3>
            <Link to='/sale'>
            <button>Sale</button>
            </Link>
        </div>
        <div className={s.sticker}>
        </div>
    </div>
  )
}
