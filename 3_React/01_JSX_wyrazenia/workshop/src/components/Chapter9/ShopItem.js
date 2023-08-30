import React from 'react';

const ShopItem = ({title, onBuy}) => {

    const clickHandler = (title) => {
        if (typeof onBuy === "function") {
            onBuy(title);
        }
        else {
            console.warn("Nie przekazano funkcji aktualizacyjnej");
        }
    }

    return (
        <div>
            <button onClick={() => clickHandler(title)}>{title}</button>
        </div>
    );
};

export default ShopItem;