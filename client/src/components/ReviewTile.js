import React, { useState } from "react"

const ReviewTile = ({ body, rating, hasPolicePresence, hasSittingWater}) => {
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)
    const [hasUpvoted, setHasUpvoted] = useState(false)
    const [hasDownvoted, setHasDownvoted] = useState(false)

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

    const handleUpvote = () => {
        if(!hasUpvoted){
            setUpvotes(upvotes + 1)
            setUpvotes(true)  
            if(hasDownvoted) {
                setDownvotes(downvotes -1)
                setHasDownvoted(false)
            } 
        }    
    }

    const handleDownvote = () => {
        if(!hasDownvoted) {
            setDownvotes(downvotes + 1)
            setHasDownvoted(true)
            if(hasUpvoted){
                setUpvotes(upvotes -1)
                setHasUpvoted(false)
            }
        }
    }

    const totalVotes = upvotes - downvotes

    return (
        <div className="callout">
            <p>Body: {body}</p>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
            <div className="voting-section">
                <button onClick={handleUpvote} className="upvote">
                    <span role="img" aria-label="upvote">&#x2191;</span>
                </button>
                <span>{totalVotes}</span>
                <button onClick={handleDownvote} className="downvote">
                    <span role="img" aria-label="downvote">&#x2193;</span>
                </button>
            </div>
        </div>
    )
}

export default ReviewTile