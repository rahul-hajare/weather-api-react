import React from 'react'

const Card = ({tempData}) => {
    const  {
        temp,
        weather,
        country,
        city
    } = tempData

   
    return (
        <>
            <div className="weatherIcon"><i className="wi wi-day-cloudy"></i></div>
            <div className="weatherInfo">
                <div className="temperature"><span>{temp}&deg;</span></div>
                <div className="description">
                    <div className="weatherCondition">{weather}</div>
                    <div className="place">{city},{country}</div>
                </div>
            </div>
            <div className="date">{new Date().getDate()}-{new Date().toLocaleString('default',{month: 'short'})}</div>
        </>
    )
}

export default Card
