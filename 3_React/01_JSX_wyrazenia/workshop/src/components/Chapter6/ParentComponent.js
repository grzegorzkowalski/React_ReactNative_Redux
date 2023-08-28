import React from 'react';

const ParentComponent = (props) => {
    return (
        <div>
            <h1>Parent Component</h1>
            {props.children}
        </div>
    );
};

export default ParentComponent;