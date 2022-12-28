import React from 'react';
import car from '@Assets/images/car.png';
import list from '@Assets/images/check-list.png';
import Slider from 'react-slick';

export default function HeaderSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="header__slider">
                <div className="header__slider-content">
                    <div className="left-content">
                        <div className="slider-content__description">
                            <h1>
                                Срочная доставка <br /> день в день
                            </h1>
                            <p>
                                Для тех, кто не может ждать у нас есть услуга
                                курьерской <br /> доставки корреспондеции и
                                видов видов отправлений.
                            </p>
                        </div>
                        <div className="slider-content__button">
                            Заказать доставку
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={car} />
                    </div>
                </div>
            </div>
            <div className="header__slider">
                <div className="header__slider-content">
                    <div className="left-content">
                        <div className="slider-content__description">
                            <h1>
                                Подписание <br /> договора за 1 час
                            </h1>
                            <p>
                                В течение часа наш курьер заберет вашу посылку и
                                подпишет с Вами
                                <br /> договор о предоставлении услуг.
                            </p>
                        </div>
                        <div className="slider-content__button">
                            Заказать доставку
                        </div>
                    </div>
                    <div className="right-content2">
                        <img src={list} />
                    </div>
                </div>
            </div>
        </Slider>
    );
}
