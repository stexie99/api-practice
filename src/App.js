import './App.css';
import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery'
import { Image } from 'react-bootstrap';

function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState('')
  const API_URL = 'http://www.omdbapi.com/?apikey=a6be511c&t='
  useEffect(()=>{
    if(search){
    const fetchData = async () => {
      document.title = `${search}`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      setData(resData)
      console.log(resData)
    }
    fetchData()
    }
  }, [search])

  const handleSearch=(e,term)=>{
    e.preventDefault()
    setSearch(term)
  }

  return (
    <>
    <div className='App'>
      <SearchBar handleSearch={handleSearch}/>
      <div className='main' style={{backgroundImage:`url(${data.Poster})`}}>
          <Image className='background'/>
      </div>
    </div>
    <div className='info'>
      <Gallery data={data} />
    </div>
    </>
  );
}

export default App;
