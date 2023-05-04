import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile.js"

const StationShow = props => {

    const [station, setStation] = useState({
        name: "",
        line: "",
        location: "",
        reviews: []
    })

    const stationId = props.match.params.id

    const getStation = async () => {
        try {
            const response = await fetch (`/api/v1/stations/${stationId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
              }
            const body = await response.json()
            setStation(body.station)
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getStation()
    }, [])

    const reviewTiles = station.reviews.map((reviewObject)=> {
        return <ReviewTile key={reviewObject.id} {...reviewObject}/>
    })
    

    return (
        <>
            <h1>{station.name}</h1>
            <h3>{station.line}</h3>
            <h3>{station.location}</h3>
            <h3>Reviews for this Station: </h3>
            {reviewTiles}
        </>
    )
}

export default StationShow