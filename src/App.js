import React, { useState } from 'react'
import InputBox from './components/InputBox'
import axios from "axios";
import Result from './components/Result';


const App = () => {
  const [input, setInput] = useState("");
  const [desc, setdesc] = useState("");
  const [temp, settemp] = useState("");
  const [icon, seticon] = useState("");

  const findWeather = async()=>{
    const apiKey = "c1556a91f6cc2a507ebca529b8e23d70";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${units}`;

    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const weatherDesc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = `https://openweathermap.org/img/wn/${icon}@5x.png`;

    settemp(temp);
    setdesc(weatherDesc);
    seticon(imageURL);
    setInput("")
    console.log(temp,desc,icon);
  };



  return (
    <div>
      { temp === "" ? <InputBox setInput={setInput} input={input} findWeather={findWeather}/>  : ( <Result temp={temp} desc={desc} image={icon} setTemp={settemp} />)}
    </div>
  )
}

export default App;