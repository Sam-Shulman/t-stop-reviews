import React, { useState, useEffect } from "react"
import ErrorList from "./ErrorList.js"
import translateServerErrors from "../services/translateServerErrors.js"
import VoteTile from "./VoteTile.js"


const ReviewTile = ({ body, rating, hasPolicePresence, hasSittingWater, stationId, reviewId }) => {
    
    const [review, setReview] = useState({
        body: "",
        rating: "",
        hasPolicePresence: null,
        hasSittingWater: null,
        votes: []
    })

    const [errors, setErrors] = useState([])

    let hasPolicePresenceSection, hasSittingWaterSection

    if (hasPolicePresence) {
        hasPolicePresenceSection = <p>There was a police presence.</p>
    } else {
        hasPolicePresenceSection = <p>There was not a police presence!</p>
    }

    if (hasSittingWater) {
        hasSittingWaterSection = <p>There was random sitting water.</p>
    } else {
        hasSittingWaterSection = <p>There was not random sitting water!</p>
    }
    
    const getReview = async () => {
        try {
            const response = await fetch (`/api/v1/stations/${stationId}/reviews/${reviewId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
              }
            const body = await response.json()
            setReview(body)
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }
    
    const postVote = async (vote) => {
        try{
            const response = await fetch(`/api/v1/stations/${stationId}/reviews/${reviewId}/votes`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(vote)
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
                setErrors([])
                setReview((prevState) => ({...prevState, votes: responseBody.review.votes}));
            }
        } catch (err){
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getReview()
    }, [])
    
    const voteTiles = review.votes.map((voteObject) => {
        return <VoteTile key={voteObject.id} stationId={stationId} reviewId={reviewId} {...voteObject} postVote={postVote}/>
      })      

    return (
        <div className="callout">
            <p>Body: {body}</p>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
            {voteTiles}
        </div>
    )
}

export default ReviewTile