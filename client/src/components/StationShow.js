import React, { useState, useEffect } from "react"

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
            debugger
            setStation(body.station)
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getStation()
    }, [])

    const showReviews = station.reviews.map(review => {
        let hasPolicePresenceSection, hasSittingWaterSection, storySection

        if (review.hasPolicePresence === true) {
            hasPolicePresenceSection = <p>There was a police presence.</p>
        } else {
            hasPolicePresenceSection = <p>There was not a police presence!</p>
        }

        if (review.hasSittingWater === true) {
            hasSittingWaterSection = <p>There was random sitting water.</p>
        } else {
            hasSittingWaterSection = <p>There was not random sitting water!</p>
        }

        if (review.story) {
            storySection = <p>Story: {review.story}</p>
        }

        return (
            <div key={review.id}>
                <h4>Name: {review.name}</h4>
                <p>Rating: {review.rating}</p>
                {hasPolicePresenceSection}
                {hasSittingWaterSection}
                {storySection}
            </div>
        )
    })
    

    return (
        <>
            <h1>{station.name}</h1>
            <h3>{station.line}</h3>
            <h3>{station.location}</h3>
            <h3>Reviews for this Station: </h3>
            {showReviews}
        </>
    )
}

export default StationShow