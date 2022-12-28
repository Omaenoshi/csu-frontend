import React from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../assets/images/closeIcon.png';
import './styles.css';

const Auth = () => {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/');
    };
    return (
        <form className="auth-form">
            <button onClick={navigateToMain} className="auth-form__close">
                <img src={close}></img>
            </button>
            <div className="auth-form__content">
                <span className="auth-form__content__title">Авторизация</span>
                <span className="auth-form__content__subtitle">
                    Введите логин и пароль, чтобы войти в личный кабинет
                </span>
                <input
                    type="text"
                    className="auth-form__content__input"
                    placeholder="Логин"
                ></input>
                <input
                    type="text"
                    className="auth-form__content__input"
                    placeholder="Пароль"
                ></input>
                <button className="auth-form__content__sub" type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};

export default Auth;