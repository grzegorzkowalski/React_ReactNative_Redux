import artist from "../data/artist";

const Task3 = () => {
    const style = {"listStyleType" :
            artist.nickname === "Eminem" ? "circle" : "none"};

    return (
        <ul style={style}>
            <li>{artist.nickname}</li>
            <li>{artist.firstName}</li>
            <li>{artist.lastName}</li>
            <li>{artist.age}</li>
        </ul>
    );
};

export default Task3;
