import React from "react";

const ReviewTile = ({ name, rating, hasPolicePresence, hasSittingWater, story}) => {
    let hasPolicePresenceSection, hasSittingWaterSection, storySection

    if (hasPolicePresence === true) {
        hasPolicePresenceSection = <p>There was a police presence.</p>
    } else if (hasPolicePresence === false) {
        hasPolicePresenceSection = <p>There was not a police presence!</p>
    }

    if (hasSittingWater === true) {
        hasSittingWaterSection = <p>There was random sitting water.</p>
    } else if (hasSittingWater === false) {
        hasSittingWaterSection = <p>There was not random sitting water!</p>
    }

    if (story) {
        storySection = <p>Story: {story}</p>
    }
    return (
        <div className="callout">
            <h4>Name: {name}</h4>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
            {storySection}
        </div>
    )
}

export default ReviewTile