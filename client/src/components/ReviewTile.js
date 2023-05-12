import React from "react";

const ReviewTile = ({reviewId, body, rating, hasPolicePresence, hasSittingWater, handleDeleteReview, currentUser, userId}) => {

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

    const isSameUser = currentUser && currentUser.id === userId

    const clickHandler = () => {
        handleDeleteReview(reviewId)
    }

    return (
        <div className="callout">
            <p>Body: {body}</p>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
        {(isSameUser) && (
            <button type="delete" className="button" onClick={clickHandler}>Delete</button>
        )}
        </div>
    )
}

export default ReviewTile