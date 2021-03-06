import React, { useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchData = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.items)
      })
  }

  const tableRows = data.map((item, index) => 
    <tr key={index}><td>{item.full_name}</td><td><a href={item.html_url}>{item.html_url}</a></td></tr>
  );
  

   return (
    <div className="App">
      <input type="text" onChange={(e) => setKeyword(e.target.value)} /> 
      <button onClick={fetchData} value={keyword}>Fetch</button>
      <table><tbody>{tableRows}</tbody></table> 
    </div>
  );
}

export default App;
