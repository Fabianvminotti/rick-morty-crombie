import React, { useState } from 'react';
import './App.css';
import Item from './components/Item'




function App () {
  
let [database,setDatabase] = useState({})


    let urlIDF = 'https://rickandmortyapi.com/api/character'
    fetch(urlIDF)
      .then(function (response) {
        return response.json()
      })
      .then((data)=> { setDatabase(data) })
      .catch(err => alert(err))


    // console.log(database)
     
    return (
      <div className="App">

        {/* <Item name={database.results[0].name} status={database.results[0].status} species={database.results[0].species}   />
      <p>{database.results[0].name}</p> */}
      </div>



    );
    
}

export default App;
