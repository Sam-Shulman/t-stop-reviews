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
        return (
            <div className="tile-border">
            <h4 className="font-apply" key={stationItem.id}>
                <Link to={`/stations/${stationItem.id}`}>
                    {stationItem.name}
                    <br></br>
                </Link>
                    {stationItem.line}
                    <br></br>
                    {stationItem.location}
                    <div className="img-format">
                   <img className="img-format" src={stationItem.imgUrl} alt="station picture"/>
                   </div>
            </h4>
            </div>
        )
    })

    return (
        <div>
            <h1 className="font-apply index-top-text">Boston T Stations</h1>
            <br></br>
            <div className="hi"> {stationIndexItems} </div>
        </div>
    )
}

export default StationIndex
