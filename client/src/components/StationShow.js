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
        imgUrl: "",
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
            const response = await fetch(`/api/v1/stations/${stationId}/reviews`, {
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

    const handleDeleteReview = async (reviewId) => {
        
        try {
            const response = await fetch(`/api/v1/stations/${stationId}/reviews/${reviewId}`,
            { method: "DELETE" })
            const filteredReviews = station.reviews.filter((review) => {
                if(review.id !== reviewId) {
                    return review
                }
            })
            setStation({
                ...station, 
                reviews: filteredReviews
            })
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
       
    const reviewTiles = 
    station.reviews.length > 0 ? (
        station.reviews.map((review) => (
            <ReviewTile
            key={review.id}
            body={review.body}
            rating={review.rating}
            handleDeleteReview={handleDeleteReview}
            hasPolicePresence={review.hasPolicePresence}
            hasSittingWater={review.hasSittingWater}
            />
        ))
    ) : (
        <p>No Reviews Here!</p>
    )
    
    useEffect(() => {
        getStation()
    }, [])

    let borderColor
    if (station.line.includes("Orange")) {
        borderColor = "orange-border"
    } else if (station.line.includes("Green")) {
        borderColor = "green-border"
    } else if (station.line.includes("Blue")) {
        borderColor = "blue-border"
    } else if (station.line.includes("Red")) {
        borderColor = "red-border"
    } else if (station.line.includes("Silver")) {
        borderColor = "silver-border"
    }
    
    return (
        <>
            <div className="show-formatter">
                <img className={`show-image-formatter ${borderColor}`} src={station.imgUrl} alt="station picture"/>
                <div className="show-page-text">
                    <h3>{station.name}</h3>
                    <h3>{station.line} Line</h3>
                    <h3>{station.location}</h3>
                </div>
            </div>
                <ErrorList errors={errors} />
                <NewReviewForm postReview={postReview} />
                <h3>What other people are saying</h3>
                <ul>{reviewTiles}</ul>
        </>
    )   
}

export default StationShow