import {useState} from 'react';
import TodoItem from "./TodoItem";

const Todo = () => {
    const [list, setList] = useState(
        ["zjeść obiad", "pouczyć się Reacta", "zrobić zakupy"]);

    const deleteItem = (name) => {
        setList(prev => prev.filter(el => el !== name));
    }

    return (
        <ul>
            {
                list.map((el, i) => {
                    return <TodoItem
                        name={el}
                        deleteItem={deleteItem}
                        key={i}
                        />
                })
            }
        </ul>
    );
};

export default Todo;