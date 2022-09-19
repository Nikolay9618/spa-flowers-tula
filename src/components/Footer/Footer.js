import React from 'react';
import './Footer.scss'
import { BiPhoneCall } from "react-icons/bi";

export default function Footer() {
   return (
      <footer className='footer'>
         <div className="container">
            <div className="footer__row">
               <div className="footer__number"><a href="tel: + 7 (999) 601 92 72"><BiPhoneCall /> +7(999)604-92-19</a></div>
               <div className="footer__vk">
                  <a href="https://vk.com/spa_flowers_tula" target='blank'>Наша группа в VK</a>
               </div>
               <div className="footer__whatsApp">
                  <a href="https://wa.me/79509067159?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5+%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0+%D1%86%D0%B5%D0%BD%D1%8B+%D0%BD%D0%B0+%D0%B1%D1%83%D0%BA%D0%B5%D1%82%D1%8B%21" target='blank'>Напишите нам в WhatsApp </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
