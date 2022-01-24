import React, { useEffect, useState } from 'react';
import './App.css';
import Item from './components/Item'
import Options from './components/options'




function App() {
let databaseView =[]
  let [database, setDatabase] = useState([])
  let [lastIndex, setLastIndex] = useState(2)
  let[url,setUrl] = useState( 'https://rickandmortyapi.com/api/character')
  //let firstURL = 'https://rickandmortyapi.com/api/character'



  const fectchAPI = (url) => {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then((data) => { setDatabase(data.results) })
      .catch(err => alert(err))

  }


  // useEffect(() => {
  //   fectchAPI(url)
  // }, []
  // )


  useEffect(() => {
    filterItems("","")
  }, []
  )

  const filterItems= (filterStatus,filterSpecies)=>{
    let status = filterStatus!=""? `status=${filterStatus}&`: ""
    let species = filterSpecies!=""? `species=${filterSpecies}`: ""
    let newUrl = 'https://rickandmortyapi.com/api/character/?'+status+species
    setUrl(newUrl)
    fectchAPI(url)
  }
  

  databaseView = database.slice(0,lastIndex+1)
  console.log(databaseView)


  return (
    <div className="App">
<Options filterItems={filterItems}/>
    <div className="App-items">
      {
        databaseView.map((item, index) => {
          return (
            
            <Item key={index}  name={item.name} status={item.status} species={item.species} image={item.image} />
          )
        })
      }
    </div>
    <button className="btn-seeMore" onClick={()=>setLastIndex(lastIndex+3)}>See More</button>
    </div>

  );
}

export default App;
