// just for test purposes

import React from "react";

function Hello(){
    // define logic above the return
    const sayHello = () => {
        console.log("Hello");
    };

    // calling the function with the Onclick
    return (
    <div>
        <h3>This is the Hello component</h3>
        <button onClick={sayHello}>Hello</button>
    </div>
    );
};

export default Hello;