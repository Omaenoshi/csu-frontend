import React from 'react';

const Block = (props) => {
    return (
        <div className="block">
            <div className="block__content">
                <img className="block__img" src={props.img} />
                <div className="block__title">{props.title}</div>
                <div className="block__subtitle">{props.description}</div>
            </div>
        </div>
    );
};

export default Block;
