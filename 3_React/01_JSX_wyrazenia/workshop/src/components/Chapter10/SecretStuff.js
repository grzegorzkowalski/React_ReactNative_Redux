const SecretStuff = ({password, correctPassword, secret}) => {
    if (password === correctPassword) {
        return (
            <div>
                <p>{secret}</p>
            </div>
        );
    }
    else {
        return null;
    }
};

export default SecretStuff;