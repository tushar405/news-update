import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './NewsApp.css'


const NewsApp = () => {
    const [search, setSearch] = useState("india");
    const [Newsdata , setNewsdata] = useState([]);
    const apikey = '622cf9c4b7b64c3b82874080b0146c29';
    const getData = async() =>{
        const response = await fetch (`https://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`)
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsdata(jsonData.articles);
    }

    useEffect(() => {
        getData()
    },[])


    const handleInput = (e) =>{
        console.log(e.target.value);
setSearch(e.target.value);
    }  

    const userInput = (event) => {
    setSearch(event.target.value);
     getData(event.target.value); 
    } 

    const Allnews = () => {
           getData()
   
    }

    const Trendingdata = (event) => {
        setSearch(event.target.value);
        getData(event.target.value);
        
    }

      const OverallNews = (event) => {
        setSearch(event.target.value);
        getData(event.target.value);
        
    }


    return (
    <div className='navbar'>
        <nav>
            <div>
                <h1 onClick={OverallNews} value="Trending News">Trending News</h1>
            </div>

            <ul>
                <a onClick={Allnews}>All News</a>
                <a onClick={Trendingdata} value="Trending">Trending</a>
            </ul>
            <div className="search-bar">
                <input onChange={handleInput} type="text" value={search} placeholder='Search news'/>
                <button onClick={getData}>Search</button>
            </div>

        </nav>
<div className='category-p'>
                <p>Stay Update With TrendyNews</p>
            </div>
        <div className="category-btn">
            
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        <div>
            {Newsdata?<Card data={Newsdata}/>:null}
            
        </div>
    </div>
  )
}

export default NewsApp