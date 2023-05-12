import React from "react";

const VotingTile = ({ review, voteMaker, user, userVote }) => {
    let addDisabled 
    let subtractDisabled 
    const matchingVote = review.votes.find((vote) => vote.userId === user?.id)

    if(!user){
        addDisabled = true
        subtractDisabled = true
    } else {
        if (matchingVote?.vote >= 1) {
            addDisabled = true
            subtractDisabled = true
            subtractDisabled = false
        } else if (matchingVote?.vote <= -1) {
            addDisabled = false
            subtractDisabled = true
        }
        if (!userVote && !matchingVote) {
            addDisabled = false
            subtractDisabled = false
        } else if (userVote >= 1) {
            addDisabled = true
            subtractDisabled = false
        } else if (userVote <= -1) {
            addDisabled = false 
            subtractDisabled = true 
        }
    }
    const addVote = () => {
        return voteMaker(1, review)
    }
    const subtractVote = () => {
        return voteMaker(-1, review)
    }
    return (
        <>
            <button className="button" onClick={addVote} disabled={addDisabled}></button>
            <p className="vote-count">{salad?.rating}</p>
            <button className="button" onClick={subtractVote} disabled={subtractDisabled}></button>
        </>
    )
}

export default VotingTile