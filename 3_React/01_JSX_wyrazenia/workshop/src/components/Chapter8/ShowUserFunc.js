const ShowUserFunc = ({name, surname}) => {
    return (
        <button onClick={() => console.log(name, surname)}>Dane użytkownika</button>
    );
};

export default ShowUserFunc;