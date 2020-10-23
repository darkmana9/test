import React from 'react';
import logo from './logo.svg';
import c from './Header.module.css'

const Header = () => {
    return (
        <div className={c.wrapper}>
        <header className = {c.header}>
         <div className = {c.header__menu}>
             <div className = {c.header__item}>
                 FAQs
             </div>
              <div className = {c.header__item}>
                Contact Us
             </div>
              <div className = {c.header__item}>
                Knowlege Base
             </div>
              <div className = {c.header__item}>
                    More
             </div>
         </div>
            <div className = {c.header__social}>
                <div className = {c.header__twitter}>
                    t
                </div>
                <div className = {c.header__faceBook}>
                    f
                </div>
                <div className = {c.header__googlePlus}>
                    g
                </div>
                <div className = {c.header__v}>
                    v
                </div>
            </div>
     </header>
</div>
    );
}

export default Header;
