import ShopItemHeader from "./ShopItemHeader";
import ShopItemDescription from "./ShopItemDescription";
import ShopItemPricing from "./ShopItemPricing";

const ShopItem = ({item: {title, image, description, price}}) => {
    return (
        <section>
            <ShopItemHeader title={title} image={image} />
            <ShopItemDescription description={description} />
            <ShopItemPricing price={price} />
        </section>
    );
};

export default ShopItem;