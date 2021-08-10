import React, {useState,useEffect} from 'react';
import './style.css'
import Card from './Card'

const MainUi = () => {

     const [searchValue, setSearchValue] = useState("nagpur")
     const [tempData, setTempData] = useState({})

     const getdata = async () => {
        try {
            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=61e9f5c49bc07f4976b028671c4928b6`;
            
            let res = await fetch(url)
            let data = await res.json()
            let {temp} = data.main
            let {main: weather} = data.weather[0]
            let {country} = data.sys
            let {name: city} = data
            

            const mydata = {
                temp,
                weather,
                country,
                city
            }

            setTempData(mydata)

        } catch (error) {
            console.log(error)
        }
     }

     useEffect(() => {
         getdata()  
     }, [])

    return (
        <>
            <article className="widget">
                <div className="inputdiv">
                    <input type="search" className="input" placeholder="ENTER CITY" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}></input>
                    <button className="button" onClick={getdata}>SEARCH</button>
                </div>
                <Card tempData={tempData}/>
            </article>
        </>

    )
}

export default MainUi
