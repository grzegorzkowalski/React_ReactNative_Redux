import {useState} from 'react';

const MyButton = () => {
    const [yesOrNo, setYesOrNow] = useState(false);

    const clickHandler = () => {
        setYesOrNow(prev => !prev);
    }

    return (
        <div>
            <button onClick={clickHandler}>{yesOrNo ? "TAK" : "NIE"}</button>
        </div>
    );
};

export default MyButton;