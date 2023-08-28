import React from 'react';

const ShopItemPricing = ({price}) => {
    return (
        <footer>
            <p>Cena: {price} zł</p>
            <button>Kup!</button>
        </footer>
    );
};

export default ShopItemPricing;