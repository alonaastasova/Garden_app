import React, { useRef } from 'react';
import logo from '../../media/image 1.png';
import basketLogo from '../../media/Vector.png'
import { NavLink } from 'react-router-dom';
import s from './style.module.css'
import { useSelector } from 'react-redux';

export default function Nav() {

    const nav_links = useRef();

    const navBtnOnClick = () => {
      const links = nav_links.current;
      links.classList.toggle(s.links_show)
    }

    const basket = useSelector(({basket}) => basket);

    const totalItems = basket.reduce((acc, {count}) => acc + count, 0);
    // or = basket.length?

  return (
    <section className={s.nav}>
            <div className={s.firstBlock}>
                <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                <NavLink to='/categories'><button>Catalogue</button></NavLink>
            </div>
            <div className={s.all_links} ref={nav_links}>
                <div className={s.secondBlock}>
                    <div className={s.links}>
                        <NavLink to='/'>Main page</NavLink>
                        <NavLink to='/products/all'>All products</NavLink>
                        <NavLink to='/sale'>All sales</NavLink>
                    </div>
                    <div>
                        <NavLink to='/basket'><img src={basketLogo} alt="basketLogo" />{totalItems === 0 ? '' : totalItems}</NavLink>
                    </div>
                </div>
            </div>
        <button onClick={navBtnOnClick} className={s.nav_btn}>=</button>
    </section>
  )
}
