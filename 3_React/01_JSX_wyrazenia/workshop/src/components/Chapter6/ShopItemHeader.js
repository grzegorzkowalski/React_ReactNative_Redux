import React from 'react';

const ShopItemHeader = ({title, image}) => {
    return (
        <header>
            <h1>{title}</h1>
            <img style={{width: "50vw" }} src={image} />
        </header>
    );
};

export default ShopItemHeader;