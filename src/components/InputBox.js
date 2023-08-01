import React from 'react';
import { Input, Button} from  '@material-ui/core';
import "./Input.css";



const InputBox = ({setInput, input , findWeather}) => {

  const functionCall =(event) =>{
    event.preventDefault();
    findWeather();
  }
  return (
    
        <div className='inputBox'>
          <div className='input__field'>
            <h1>Google Weather App</h1>
            <p>Power by Google</p>
            <img src='https://i.ibb.co/1MYRH0n/pngwing-com.png" '/> 
            <form>
              <Input placeholder='Enter the city Name' onChange={(e)=> setInput(e.target.value)}  value={input}/> 
              <br />
              <Button variant="contained"  type='submit' onClick={functionCall}>Search </Button>
            </form>
          </div>
    
        </div>
      )
    }
  

export default InputBox