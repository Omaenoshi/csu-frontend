import React from 'react';

import logo from '@Assets/images/logo.svg';

import './styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <img className="footer__logo" src={logo} />
                <div className="footer__about">
                    <div className="first-column">
                        <ul>
                            <li>О компании</li>
                            <li>Вакансии</li>
                            <li>Клиенту</li>
                            <li>Франчайзинг</li>
                        </ul>
                    </div>
                    <div className="second-column">
                        <ul>
                            <li>Доставка из Китая</li>
                            <li>Все услуги</li>
                            <li>Акции</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__contacts">
                    manager@uexpress.ru
                    <br />
                    <br />
                    115221, г. Челябинск, ул. <br /> Северная, д. 29-в
                    <br />
                    <br />
                    Мы работаем по 24 часа <br /> 5 дней в неделю
                </div>
            </div>
        </div>
    );
};

export default Footer;
