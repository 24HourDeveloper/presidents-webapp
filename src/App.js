import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
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
    <div className="App">
      <img src={data.length && data[0].imgUrl} alt="President George Washington" width={200} />
    </div>
  );
}

export default App;
