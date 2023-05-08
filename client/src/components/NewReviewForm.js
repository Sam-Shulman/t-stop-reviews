import React, {useState} from "react"

const NewReviewForm = ({ postReview }) => {
    const [newReview, setNewReview] = useState({
        body: "",
        rating: "",
        hasPolicePresence: null,
        hasSittingWater: null
    })

    const handleInputChange = (event) => {
        setNewReview({
            ...newReview,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const handleStarClick = (event) => {
        const ratingValue = event.currentTarget.value
        setNewReview({
          ...newReview,
          rating: ratingValue
        })
      }
    const handleSubmit = (event) => {
        event.preventDefault()
        postReview(newReview)
        clearForm()
    }
    const clearForm = () => {
        setNewReview({
            body: "",
            rating: "",
            hasPolicePresence: null,
            hasSittingWater: null,
        })
    }

    return (
        <div className="form-border">
  <h1 className="top-sign-text">Add a Review for this Station!</h1>
  <form onSubmit={handleSubmit}>
    <div className="rating form-border">
      <p>Rate the station:</p>
      <input type="radio" id="star5" name="rating" value="5" onChange={handleInputChange}/>
      <label htmlFor="star5" title="5 trains"></label>
      <input type="radio" id="star4" name="rating" value="4" onChange={handleInputChange}/>
      <label htmlFor="star4" title="4 trains"></label>
      <input type="radio" id="star3" name="rating" value="3" onChange={handleInputChange}/>
      <label htmlFor="star3" title="3 trains"></label>
      <input type="radio" id="star2" name="rating" value="2" onChange={handleInputChange}/>
      <label htmlFor="star2" title="2 trains"></label>
      <input type="radio" id="star1" name="rating" value="1"onChange={handleInputChange}/>
      <label htmlFor="star1" title="1 train"></label>
    </div>
    <label>
      <p>What did you think?</p>
      <input type="text" name="body" onChange={handleInputChange} value={newReview.body} />
    </label>
    <div>
      <p>Did this station have a police presence?</p>
      <input
        type="radio"
        name="hasPolicePresence"
        value="true"
        checked={newReview.hasPolicePresence === "true"}
        onChange={handleInputChange}
      />
      <label>Yes</label>

      <input
        type="radio"
        name="hasPolicePresence"
        value="false"
        checked={newReview.hasPolicePresence === "false"}
        onChange={handleInputChange}
      />
      <label>No</label>
    </div>
    <div>
      <p>Did this station have random sitting water?</p>
      <input
        type="radio"
        name="hasSittingWater"
        value="true"
        checked={newReview.hasSittingWater === "true"}
        onChange={handleInputChange}
      />
      <label>Yes</label>

      <input
        type="radio"
        name="hasSittingWater"
        value="false"
        checked={newReview.hasSittingWater === "false"}
        onChange={handleInputChange}
      />
      <label>No</label>
    </div>

    <div className="button-group">
      <input className="button" type="submit" value="Post Review" />
    </div>
  </form>
</div>
    )
}

export default NewReviewForm