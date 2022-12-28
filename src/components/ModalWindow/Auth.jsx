import React from 'react';
import { useNavigate } from 'react-router-dom';
import close from '@Assets/images/close.png';

const Auth = () => {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/');
    };
    return (
        <form className="auth-form">
            <button onClick={navigateToMain} className="auth-formclose">
                <img src={close}></img>
            </button>
            <div className="auth-formcontent">
                <span className="auth-formcontenttitle">Авторизация</span>
                <span className="auth-formcontentsubtitle">
                    Введите логин и пароль, чтобы войти в личный кабинет
                </span>
                <input
                    type="text"
                    className="auth-formcontentinput"
                    placeholder="Логин"
                ></input>
                <input
                    type="text"
                    className="auth-formcontentinput"
                    placeholder="Пароль"
                ></input>
                <button className="auth-formcontentsub" type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};

export default Auth;
