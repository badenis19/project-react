// just for test purposes

import React from 'react';

function Bye(){
    const bye = () => {
        console.log("Bye");
    };

    return (
        <div>
            <h3>This is the Bye component</h3>
            <button onClick={bye}>Bye</button>
        </div>
    )
}

export default Bye;