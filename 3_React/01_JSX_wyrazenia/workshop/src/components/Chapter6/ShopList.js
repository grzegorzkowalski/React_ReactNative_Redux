import React from 'react';
import ShopItemHeader from "./ShopItemHeader";

const ShopList = ({shopItems}) => {
    return (
        <div>
            {
                shopItems.map((el, i) => {
                    return <ShopItemHeader
                        image={el.image}
                        title={el.title}
                        key={i} />
                })
            }
        </div>
    );
};

export default ShopList;