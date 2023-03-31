
import React, { useState } from 'react';


const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold')

  const increasTemp = () => {
    if (temperatureValue === 30) return;
    
   const newTemp = temperatureValue + 1; 
    if ( newTemp >= 15){
      setTemperatureColor('hot')
    }
    setTemperatureValue(newTemp)
  }

  const decreasTemp = () => {
    if (temperatureValue === 0) return;
   const newTemp = temperatureValue - 1; 
       if (newTemp < 15){
      setTemperatureColor('cold')
       }
    setTemperatureValue(newTemp)
  }

  
  return (
    <div className='app-container'>
      <div className='temperature-display-container '>
        <div className= {`temperature-dispaly ${temperatureColor}`}>{temperatureValue}C</div>
      </div>
      <div className= 'button-container'></div>
      <button onClick={()=> increasTemp() }>+</button>
      <button onClick= {() => decreasTemp() }>-</button>
    </div>
  )
}

export default App;
