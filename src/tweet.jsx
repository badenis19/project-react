import React from 'react';
// importing the css file
import "./App.css"

// adding props parameter to the function
// On App < Tweet name="James Bond" message="Hello" likes="2" />
// using destructuring the props
function Tweet({name, message, likes}){

    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{likes}</h3>
        </div>
    );
};

export default Tweet;


// OTHER WAY TO GET THE PROPS 
// function Tweet(props){

//     return (
//         <div className="tweet">
//             <h3>{props.name}</h3>
//             <p>{props.message}</p>
//             <h3>{props.likes}</h3>
//         </div>
//     );
// };

// export default Tweet;