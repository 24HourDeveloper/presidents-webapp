import React, {useState, useEffect} from 'react';

import President from "./components/President"
import './App.css';



function App() {
  const [data, setData] = useState([]);
  

  useEffect(() =>{
    const fetchData = async() =>{
      const res = await fetch("http://localhost:5000");
      const president = await res.json();
      setData(president);
    }
    fetchData();
  },[])
  console.log(data);
  return (
    <>
    <div>
      <h1>United States Presidents</h1>
      </div>
    <div className="App">
      {data.length ? 
      <President restData={data}/>
    : null }
    </div> 
    </>
  );
}

export default App;
