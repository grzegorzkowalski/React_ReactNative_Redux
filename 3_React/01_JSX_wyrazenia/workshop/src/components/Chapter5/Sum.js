const Sum = (props) => {
    return (
        <h1>
            {
                props.numbers.reduce((cur, next) => cur + next, 0)
            }
        </h1>
    );
};

export default Sum;