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
  };
  const totalVotes = upvotes - downvotes;
return (
  <div className="voting-section">
    <button onClick={handleUpvote} className="vote-buttons">
      {'\u21A5'}
    </button>
    <span> {totalVotes} </span>
    <button onClick={handleDownvote} className="vote-buttons">
      {'\u21A7'}
    </button>
  </div>
);
};

export default VoteTile