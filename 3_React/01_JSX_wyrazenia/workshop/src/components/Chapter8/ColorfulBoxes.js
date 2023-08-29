import {useState} from 'react';

const ColorfulBoxes = () => {
    const [colors, setColors] = useState([]);

    const clickHandler = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColors(prev => [...prev, randomColor]);
    }

    return (
        <div>
            <button onClick={clickHandler}>Dodaj Boxa!</button>
            {
                colors.map((el,i) => <div
                    key={i}
                    style={{
                    width: "200px",
                    height: "200px",
                    background: el}} />)
            }
        </div>
    );
};
export default ColorfulBoxes;