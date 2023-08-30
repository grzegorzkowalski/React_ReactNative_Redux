import {useState} from 'react';

const Hello = () => {
    const [name, setName] = useState("Grzegorz");
    return (
        <div>
            <form>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </form>
            <h1>{name}</h1>
        </div>
    );
};

export default Hello;