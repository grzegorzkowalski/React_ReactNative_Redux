import React from 'react';

const GrandchildComponent = (props) => {
    return (
        <div>
            <h3>Grandchild Component</h3>
            {props.children}
        </div>
    );
};

export default GrandchildComponent;