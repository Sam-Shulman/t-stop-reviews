import ReviewSerializer from "./ReviewSerializer.js"

class StationSerializer {
    static async getSummary(station) {
        const allowedAttributes = ["id", "name", "line", "location"]
        let serializedStation = {}
        for (const attribute of allowedAttributes) {
            serializedStation[attribute] = station[attribute]
        }
        const relatedReviews = await station.$relatedQuery("reviews")
        const serializedReviews = relatedReviews.map(review => 
            ReviewSerializer.getSummary(review)
        )
        serializedStation.reviews = serializedReviews
        return serializedStation
    }
}

export default StationSerializer