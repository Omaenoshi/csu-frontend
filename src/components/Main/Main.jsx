import React from 'react';
import Block from '@Components/Main/Block';
import block1 from '@Assets/images/block1.png';
import block2 from '@Assets/images/block2.png';
import block3 from '@Assets/images/block3.png';
import block4 from '@Assets/images/block4.png';
import block5 from '@Assets/images/block5.png';

const Main = () => {
    const blocks = [
        { id: 1, img: 1, title: 'Morning', description: 'I do...' },
        { id: 2, img: 2, title: 'Evening', description: 'I think...' },
        { id: 3, img: 3, title: 'Night', description: 'I sleep...' },
    ];

    return (
        <div className="tablePage">
            <div className="tablePage__content">
                <div className="tablePage__content-title">5 шагов к заявке</div>
                <div className="first-row">
                    <Block
                        img={block1}
                        title="Расчетать стоимость"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt."
                    />
                    <Block
                        img={block2}
                        title="Вызвать курьера"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt"
                    />
                    <Block
                        img={block3}
                        title="Оплатить услуги"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt"
                    />
                </div>
                <div className="second-row">
                    <Block
                        img={block4}
                        title="Заключить договор"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt"
                    />
                    <Block
                        img={block5}
                        title="Предоставить данные"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt"
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
