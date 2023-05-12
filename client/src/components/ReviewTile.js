import React, { useState } from "react";

const ReviewTile = ({
  body,
  rating,
  hasPolicePresence,
  hasSittingWater,
  userVoteValue,
  stationId,
  id
}) => {
  const [voteTotal, setVoteTotal] = useState(0);
  const [voted, setVoted] = useState(false);

  const handleVotes = async (voteValue, reviewId) => {
    console.log("handleVotes - voteValue:", voteValue);
    console.log("handleVotes - reviewId:", reviewId);
    try {
      const response = await fetch(`/api/v1/votes`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ voteValue, reviewId }),
      });

      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json();
          const newErrors = translateServerErrors(errorBody.errors);
          return setErrors(newErrors);
        }
        throw new Error("Request failed with status: " + response.status);
      }

      const responseBody = await response.json();
      setVoteTotal(responseBody.vote);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleUpVote = () => {
    handleVotes(voted ? 0 : 1, id);
  };

  const handleDownVote = () => {
    handleVotes(voted ? 0 : -1, id);
  };
  let hasPolicePresenceSection, hasSittingWaterSection;

  if (hasPolicePresence) {
    hasPolicePresenceSection = <p>There was a police presence.</p>;
  } else {
    hasPolicePresenceSection = <p>There was not a police presence!</p>;
  }

  if (hasSittingWater) {
    hasSittingWaterSection = <p>There was random sitting water.</p>;
  } else {
    hasSittingWaterSection = <p>There was not random sitting water!</p>;
  }

  return (
    <div className="callout">
      <p>Body: {body}</p>
      <p>Rating: {rating}</p>
      {hasPolicePresenceSection}
      {hasSittingWaterSection}
      <button
        className={`button ${voted}`}
        onClick={handleUpVote}
      >
        Upvote
      </button>
      <br />
      {voteTotal}
      <br />
      <br />
      <button
        className={`button ${voted}`}
        onClick={handleDownVote}
      >
        Downvote
      </button>
    </div>
  );
};

export default ReviewTile;

      
