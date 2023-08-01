import { Button } from '@material-ui/core'
import React from 'react'
import "./Result.css"

const Result = ({temp,desc,image,setTemp}) => {
  return (
    <div className='result'>
        <div className='result__box'>
            <h1>Temp: {temp}°C</h1>
            <h3>{desc}</h3>
            <img src={image} alt="icon" /> <br />
            <Button variant='contained' color='default' onClick={()=>setTemp("")}>Back</Button>
        </div>

        
    </div>
  )
}

export default Result