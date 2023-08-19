import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Mycard from './components/mycard';
import NavBar from './components/navbar';



function App() {

    let cards = [];
    for (let index = 0; index <3; index++) {
        cards.push(<Mycard />);
    }
  return (
    <div>
        <NavBar /> 

        {cards}
        
   
    </div>
  )
}

export default App