import React from 'react';
// importing the component
import Tweet from "./tweet";


// define the logic before the return

// creating component

function App(){
  return (
    <div className="app">
      < Tweet name="James Bond" message="Hello" likes="2" />
      < Tweet name="Christmas" message="Santa" likes="3"/>
      < Tweet name="Popeye" message="Spinashhhh!" likes="332"/>
      < Tweet name="Boxing" message="Champion" likes="32"/>
    </div>
  );
}

export default App;