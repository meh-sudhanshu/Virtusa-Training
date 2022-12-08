
import { useState } from 'react';
import './App.css'

import Button from './components/Button';
import PopUp from './components/PopUp';
function App() {

  const [number,setNumber] = useState(0)

  function changeNumber(num){
    setNumber(num)
  }

  const [popUpState , setPopUpState] = useState(false)

  function togglePopUpState(){
    setPopUpState(!popUpState)
  }


  return ( 
    <div className="App">
        {popUpState === true && <PopUp/>}
        <h2 className='text'>{number}</h2>
        <div className='wrapper'>
          <Button text="increase" color="green" changeNumber={changeNumber} num={number}  togglePopUpState={togglePopUpState}/>
          <Button text="decrease" color="blue" changeNumber={changeNumber} num={number} togglePopUpState={togglePopUpState}/>
        </div>
    </div>
  );
}

export default App;
