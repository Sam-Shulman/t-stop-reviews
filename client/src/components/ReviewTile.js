import React from "react";

const ReviewTile = ({ stationId, body, rating, id, hasPolicePresence, hasSittingWater, handleDeleteReview }) => {
    //console.log(props)
    // console.log(id)

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

    const clickHandler = event => {
        event.preventDefault()
        // console.log(event)
        handleDeleteReview(id)
    }

    return (
        <div className="callout">
            <p>Body: {body}</p>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
            <div>
                <input type="button" className="deleteButton" onClick={clickHandler}></input>
            </div>
        </div>
    )
}

export default ReviewTile