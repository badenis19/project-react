// done using https://www.youtube.com/watch?v=dGcsHMXbSOA

import React, {useState}  from 'react';
// importing the component
import Tweet from "./tweet";
import "./App.css"

// creating component
function App(){

  // setting the variable [var, function] = value of var
  const [isRed, setRed ] = useState(false);
  const [count, setCount ] = useState(0);
  
  // example below when receiving information from an API
  const [users, setUsers ] = useState([
    { name: "New year", 
      message: "I am a message ",
      likes: "3"
    },
    { name: "Boxing Day", 
      message: "I am a random message",
      likes: "2"
    },
    { name: "Christmas", 
      message: "whoooooooooo",
      likes: "2"
    }
  ]);

  // defining method which will increment the value of the variable count when triggered
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed); // to make it toggle from true to false
  };

  return (
    <div className="app">
      {/* goes through the array of objects (users) and renders them with the info  */}
      {users.map(user => (
        < Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}

      {/* to toggle color when clicking on button */}
      {/* <h1 className={isRed ? "red" : "" }>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {/* to display many tweets */}
      {/* < Tweet name="James Bond" message="Hello" likes="2" />
      < Tweet name="Christmas" message="Santa" likes="3"/>
      < Tweet name="Popeye" message="Spinashhhh!" likes="332"/>
      < Tweet name="Boxing" message="Champion" likes="32"/> */}
      
    </div>
  );
}

export default App;