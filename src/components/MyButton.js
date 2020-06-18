import React from 'react';

function MyButton (properties) {
    return (
        <>
            <span>
                <b>{properties.title}: </b>
                {properties.children}
            </span>
        </>
    )
}

export default MyButton;