import React from 'react';
import instaSymbol from '../../media/instagram.png';
import whatsappSymbol from '../../media/whatsapp.png';
import s from './style.module.css'

export default function Footer() {
  return (
    <section className={s.footer}>
      <div className={s.about}>
        <div className={s.contact}>
            <h2>Contact</h2>
            <p className={s.text}>+49 999 999 99 99</p>
            <div className={s.info}>
              <div className={s.link}>
                <img src={instaSymbol} alt="instagram" />
                <p>Instagram</p>
              </div>
              <div className={s.link}>
                <img src={whatsappSymbol} alt="whatsapp" />
                <p>WhatsApp</p>
              </div>
            </div>
          </div>
          <div className={s.address}>
            <h2>Address</h2>
            <a href="https://www.google.com/search?q=telranDE" target='_blank'>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
            <div>
              <p>Working hours:</p>
              <p className={s.time}>24 hours a day</p>
            </div>
        </div>
      </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.0397908611967!2d13.374596876695872!3d52.50795051447689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1678741665185!5m2!1sru!2sde" frameborder="0" title='location'></iframe>
    </section>
  )
}
