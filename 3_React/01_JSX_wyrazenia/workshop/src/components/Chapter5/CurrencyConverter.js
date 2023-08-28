import React from 'react';

const CurrencyConverter = (props) => {
    return (
        <div>
            <strong>{props.value}</strong> {props.from} => <strong>{props.value*props.rate}</strong> {props.to}
        </div>
    );
};

export default CurrencyConverter;