import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import {URL,api_key} from "./contents/index"
import Title from './title';
import Explanation from "./components/explination";

function App() {
const date  = Date();
  const [title, setTitle] = useState('')
  const [datas ,setData] = useState([])
  const [error ,setError] = useState("")
  const [copyright ,setCopyright] = useState("")
  const [paragraph,setParagraph] = useState("")

  

  useEffect(() => {
    axios.get(`${URL}${api_key}`)
    .then(response => {
   console.log(response)
      setTitle(response.data.title)
      setData(response.data);
      setParagraph(response.data.explanation);
      setCopyright(response.data.copyright);
    })
    .catch(error => {alert(error);
    setError("sorry we will get back to you as soon as possible")
    })
  },[])

  
  

  return (
    
    <div className="App">
      
      <Title title={title} />
  
      <img src={'https://apod.nasa.gov/apod/image/2108/Mammatus_Johnston_960.jpg'} />
      <Explanation paragraph={paragraph}/>
      {/* <p >
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <div className= "date-copyright">
      <h4>{date}</h4>
      <h4>{copyright}</h4>
      </div>
    </div>
  );
}

export default App;
