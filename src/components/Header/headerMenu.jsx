import React from 'react';
import logo from '@Assets/images/logo.svg';
import phone from '@Assets/images/phone.svg';
import HeaderSlider from '@Components/Header/headerSlider';
import { useNavigate } from 'react-router-dom';

const HeaderMenu = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };

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
                            <button className="button" onClick={navigateToAuth}>
                                Вход
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderSlider />
        </div>
    );
};

export default HeaderMenu;
