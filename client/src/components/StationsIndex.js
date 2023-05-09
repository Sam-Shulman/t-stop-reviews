import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const StationIndex = props => {

    const [stations, setStations] = useState([])

    const getStations = async() => {
        try {
            const response = await fetch (`/api/v1/stations`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw(error)
            }
            const body = await response.json()
            setStations(body.stations)
        } catch(err) {
            console.log(`Error in fetch: ${err.message}`)
        }
        }
    
    useEffect(() => {
        getStations()
    }, [])

    const stationIndexItems = stations.map(stationItem => {

        let borderColor
        if (stationItem.line.includes("Orange")) {
            borderColor = "orange-border"
        } else if (stationItem.line.includes("Green")) {
            borderColor = "green-border"
        } else if (stationItem.line.includes("Blue")) {
            borderColor = "blue-border"
        } else if (stationItem.line.includes("Red")) {
            borderColor = "red-border"
        } else if (stationItem.line.includes("Silver")) {
            borderColor = "silver-border"
        }

        return (
            <div className={`tile-border ${borderColor}`}>
                <div className="font-apply index-text-size" key={stationItem.id}>
                    <Link to={`/stations/${stationItem.id}`}>
                        <p>{stationItem.name}</p>
                    </Link>
                        <p>{stationItem.line}</p>
                        <p>{stationItem.location}</p>
                        <div>
                             <img className="img-format" src={stationItem.imgUrl} alt="Station Photo"/>
                        </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1 className="font-apply index-top-text">Boston T Stations</h1>
            <br></br>
            <div className="index-item-styling"> {stationIndexItems} </div>
        </div>
    )
}

export default StationIndex
