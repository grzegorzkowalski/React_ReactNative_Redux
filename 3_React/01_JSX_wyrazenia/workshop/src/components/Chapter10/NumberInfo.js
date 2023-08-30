import React from 'react';

const NumberInfo = ({number}) => {

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    function powerOfTwo(x) {
        return Math.log2(x) % 1 === 0;
    }

    return (
        <ul>
            {!isNaN(number) && <li>{number}</li>}
            {number % 2 === 0 ? <li>Parzysta</li> : <li>Nieparzysta</li>}
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {powerOfTwo(number) && <li>Potęga liczby 2</li>}
        </ul>
    );
};

export default NumberInfo;