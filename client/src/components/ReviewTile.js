import React, { useState } from "react";

const ReviewTile = ({
  body,
  rating,
  hasPolicePresence,
  hasSittingWater,
  reviewId,
}) => {
  const [voteTotal, setVoteTotal] = useState(0);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleVotes = async (voteValue, reviewId) => {
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
      setVoteTotal(responseBody.review.voteValue);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleUpVote = () => {
    if (upvoted) {
      setVoteTotal(voteTotal - 1); // Unvote, decrement voteTotal by 1
      setUpvoted(false);
    } else {
      if (downvoted) {
        setVoteTotal(voteTotal + 2); // Switch from downvote to upvote, increment voteTotal by 2
      } else {
        setVoteTotal(voteTotal + 1); // Increment voteTotal by 1
      }
      setUpvoted(true);
      setDownvoted(false);
    }
    handleVotes(upvoted ? 0 : 1, reviewId); // Pass the voteValue based on the current upvoted state
  };

  const handleDownVote = () => {
    if (downvoted) {
      setVoteTotal(voteTotal + 1); // Unvote, increment voteTotal by 1
      setDownvoted(false);
    } else {
      if (upvoted) {
        setVoteTotal(voteTotal - 2); // Switch from upvote to downvote, decrement voteTotal by 2
      } else {
        setVoteTotal(voteTotal - 1); // Decrement voteTotal by 1
      }
      setDownvoted(true);
      setUpvoted(false);
    }
    handleVotes(downvoted ? 0 : -1, reviewId); // Pass the voteValue based on the current downvoted state
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
        className={`button ${upvoted ? "disabled" : ""}`}
        onClick={handleUpVote}
        disabled={upvoted}
      >
        Upvote
      </button>
      <br />
      {voteTotal}
      <br />
      <br />
      <button
        className={`button ${downvoted ? "disabled" : ""}`}
        onClick={handleDownVote}
        disabled={downvoted}
      >
        Downvote
      </button>
    </div>
  );
};

export default ReviewTile;

      
