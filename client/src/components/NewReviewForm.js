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
        <div>
            <h1>Add a Review for this Station!</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    <p>Review:</p>
                    <input
                    type="text"
                    name="body"
                    onChange={handleInputChange}
                    value={newReview.body}
                    />
                </label>
                <div>
                    <p>Enter A Rating</p>
                    <label>
                        <input
                        type="text"
                        name="rating"
                        onChange={handleInputChange}
                        value={newReview.rating}
                        />
                    </label>
                </div>
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
                    <input className="button" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default NewReviewForm