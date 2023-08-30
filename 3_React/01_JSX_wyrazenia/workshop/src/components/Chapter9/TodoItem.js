const TodoItem = ({name, deleteItem}) => {
    const clickHandler = (name) => {
      if (typeof deleteItem === "function") {
          deleteItem(name);
      }
    }

    return (
        <li>
            {name}
            <button onClick={() => clickHandler(name)}>usuń</button>
        </li>
    );
};

export default TodoItem;