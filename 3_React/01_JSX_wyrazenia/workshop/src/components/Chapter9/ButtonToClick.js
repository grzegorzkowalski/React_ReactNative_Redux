import React from 'react';

const ButtonToClick = ({addCounter}) => {
    const clickHandler = () => {
        if (typeof addCounter === "function") {
            addCounter();
        }
    }
    return (
        <div>
            <button onClick={clickHandler}>Clik me</button>
        </div>
    );
};

export default ButtonToClick;