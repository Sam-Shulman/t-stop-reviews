import React from "react";
import VoteTile from "./VoteTile.js";

const ReviewTile = ({ body, rating, hasPolicePresence, hasSittingWater, reviewId, id}) => {
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
    return (
        <div className="callout">
            <p>Body: {body}</p>
            <p>Rating: {rating}</p>
            {hasPolicePresenceSection}
            {hasSittingWaterSection}
            <VoteTile key={id} reviewId={id}/>
            </div>
    )
}

export default ReviewTile