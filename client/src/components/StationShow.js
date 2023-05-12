import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import ReviewTile from "./ReviewTile.js"
import NewReviewForm from "./NewReviewForm.js"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"
import getCurrentUser from "../services/getCurrentUser.js"

const StationShow = props => {
    const [station, setStation] = useState({
        name: "",
        line: "",
        location: "",
        imgUrl: "",
        reviews: []
    })
    const [errors, setErrors] = useState([])

    const [shouldRedirect, setShouldRedirect] = useState(false)

    const stationId = props.match.params.id

    const [currentUser, setCurrentUser] = useState(undefined);
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser()
        setCurrentUser(user)
      } catch(err) {
        setCurrentUser(null)
      }
    }
  
    useEffect(() => {
      fetchCurrentUser()
    }, [])

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
       
    const reviewTiles = station.reviews.length > 0 ? (
        station.reviews.map((review) => (
            <ReviewTile
                key={review.id}
                reviewId={review.id}
                body={review.body}
                rating={review.rating}
                handleDeleteReview={handleDeleteReview}
                hasPolicePresence={review.hasPolicePresence}
                hasSittingWater={review.hasSittingWater}
                currentUser={currentUser}
                userId={review.userId}
            />
        ))
    ) : (
        <p>No Reviews Here!</p>
    )
    
    useEffect(() => {
        getStation()
    }, [])

    const deleteStation = async () => {
        try{
            const response = await fetch(`/api/v1/stations/${stationId}`, 
            { method: "DELETE"})
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            setShouldRedirect(true)
        } catch (err){
            console.error(`Error in fetch: ${err.message}`)
        }
    }
    const handleDelete = (event) => {
        event.preventDefault()
        deleteStation()
    }
    if (shouldRedirect){
        return <Redirect push to="/" />
    }
    let isAdmin = false
    if(props.user) {
        isAdmin = props.user.isAdmin
    }
    let classHide = "hide"
    if (isAdmin) {
        classHide = ""
    }
    const message = "Delete this station"

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
                <div className="deleteButton">
                    <button onClick={handleDelete} className={`button ${classHide}`}>{isAdmin && message}</button>
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