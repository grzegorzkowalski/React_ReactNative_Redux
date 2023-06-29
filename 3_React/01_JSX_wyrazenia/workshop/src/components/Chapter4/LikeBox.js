const LikeBox = (props) => {
    return (
        <div>
            <p>{props.likes}</p>
            <button>Like</button>
        </div>
    );
};

export default LikeBox;
