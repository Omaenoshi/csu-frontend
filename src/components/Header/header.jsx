import React from 'react';
import logo from '@Assets/images/logo.svg';
import phone from '@Assets/images/phone.svg';

const Header = () => {
    return (
        <div className="main-page__header">
            <div className="main-page__header-menu">
                <div className="main-page__header-menu__content">
                    <div className="header-menu__info">
                        <img className="header__logo" src={logo} />
                        <div className="info__title">
                            | Курьерская служба доставки
                        </div>
                    </div>
                    <div className="header-menu__form">
                        <div className="form__info-phone">
                            <img className="logo__phone" src={phone} />
                            <div className="phone-title">8 (909) 023-12-51</div>
                        </div>
                        <div className="form__info-button">
                            <a href="#">
                                <div className="button">Вход</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;