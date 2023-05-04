import React, {useState} from "react"

const newReviewForm = ({ postReview }) => {
    const [newReview, setNewReview] = useState({
        name: "",
        rating: "",
        hasPolicePresence: null,
        hasSittingWater: null,
        story: "",
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
            name: "",
            rating: "",
            hasPolicePresence: null,
            hasSittingWater: null,
            story: "",
        })
    }

    return (
        <div>
            <h1>Add a Review for this Station!</h1>
            <form onSubmit={handleSubmit} >
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={newReview.name}
                    />
                </label>
                <div>
                    <p>Enter A Rating</p>l
                    <label>

                    </label>
                </div>
            </form>
        </div>
    )
}