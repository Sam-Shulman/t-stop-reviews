import React, { useState } from "react";

const VoteTile = ({ stationId, reviewId, userId, value }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);

  const handleUpvote = async () => {
    if (!hasUpvoted) {
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);
      if (hasDownvoted) {
        setDownvotes(downvotes - 1);
        setHasDownvoted(false);
      }
    }

    try {
      await fetch(`/api/v1/votes`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          value: 1
        }),
      });
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleDownvote = async () => {
    if (!hasDownvoted) {
      setDownvotes(downvotes + 1);
      setHasDownvoted(true);
      if (hasUpvoted) {
        setUpvotes(upvotes - 1);
        setHasUpvoted(false);
      }
    }

    try {
      await fetch(`/api/v1/votes`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          value: -1,
        }),
      });
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const totalVotes = upvotes - downvotes

  
  return (
    <div className="voting-section">
      <button onClick={handleUpvote} className="upvote">
        ⬆️
      </button>
      <span>{totalVotes}</span>
      <button onClick={handleDownvote} className="downvote">
        ⬇️
        </button>
    </div>
  );
};

export default VoteTile