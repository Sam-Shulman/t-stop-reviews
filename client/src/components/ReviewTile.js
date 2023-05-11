import React from "react";

const ReviewTile = ({ stationId, body, rating, id, hasPolicePresence, hasSittingWater, handleDeleteReview }) => {
    // const {id, body, rating, hasPolicePresence, hasSittingWater} = review    
    
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

    const clickHandler = () => {
        handleDeleteReview(id)
    }

    return (
        <div className="callout">
            <p>Body: {body}</p>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
            <div>
                <button type="delete" onClick={clickHandler}>Delete</button>
            </div>
        </div>
    )
}

export default ReviewTile