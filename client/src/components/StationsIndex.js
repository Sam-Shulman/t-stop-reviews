import React, {useEffect, useState} from "react";

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
            <div>
                <p>{stationItem.name}</p>
                <p>{stationItem.line}</p>
                <p>{stationItem.location}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>Boston T Stations</h1>
            <ul>{stationIndexItems}</ul>
        </div>
    )
}


export default StationIndex