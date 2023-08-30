import {useState} from 'react';

const SelectOrType = ({items}) => {
    const [cars, setCars] = useState([...items, "Inne"]);
    const [selectedCar, setSelectedCar] = useState("");
    const [newCar, setNewCar] = useState(cars[cars.length -1]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(cars[cars.length -1]);
        if (newCar !== cars[cars.length -1]) {
            setCars(prev => {
                const carsArr = [...prev];
                carsArr.pop();
                carsArr.push(newCar);
                return carsArr;
            })
        }
    }

    return (
        <div>
            <form>
                <select
                    onChange={(e) => setSelectedCar(e.target.value)}
                >
                    {
                        cars.map((el, i) => <option key={i} value={el}>{el}</option>)
                    }
                </select>
            </form>
            { selectedCar === cars[cars.length -1] &&
                <form onSubmit={submitHandler}>
                    <input
                        value={newCar}
                        onChange={(e) => setNewCar(e.target.value)}
                    />
                    <button>Zmień</button>
                </form>
            }
        </div>
    );
};

export default SelectOrType;