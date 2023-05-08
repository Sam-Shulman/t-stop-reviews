import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile.js"
import NewReviewForm from "./newReviewForm.js"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"


const StationShow = props => {

    const [station, setStation] = useState({
        name: "",
        line: "",
        location: "",
        reviews: []
    })
    const [errors, setErrors] = useState([])

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

    
    const postReview = async (newReviewData) => {
        try{
            const response = await fetch(`/api/v1/stations/${stationId}`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(newReviewData)
            })
            if (!response.ok) {
                if (response.status === 422) {
                    const errorBody = await response.json()
                    const newErrors = translateServerErrors(errorBody.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw error
                }
            } else {
                const responseBody = await response.json()
                const updatedReviews = station.reviews.concat(responseBody.review)
                setErrors([])
                setStation({...station, reviews: updatedReviews})
            }
        } catch (error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() => {
        getStation()
    }, [])
    const reviewTiles = station.reviews.map((reviewObject)=> {
        return <ReviewTile key={reviewObject.id} {...reviewObject}/>
    })
    
        return (
        <div>
            <h1>{station.name}</h1>
            <p>{station.line}</p>
            <p>{station.location}</p>
            <div>
                <ErrorList errors={errors} />
                <NewReviewForm postReview={postReview} />
            </div>
            <h3>What other people are saying</h3>
            {reviewTiles}
        </div>
    )
}

export default StationShow