import ReviewSerializer from "./ReviewSerializer.js"
class StationSerializer {
    static async getSummary(station) {
        const allowedAttributes = ["id", "name", "line", "location", "imgUrl", "userId"]
        let serializedStation = {}
        for (const attribute of allowedAttributes) {
            serializedStation[attribute] = station[attribute]
        }
        const relatedReviews = await station.$relatedQuery("reviews")

        const serializedReviews = relatedReviews.map((review) => {
            ReviewSerializer.singleShowDetails(review, currentUser)
            serializedStation.reviews = serializedReviews
            return serializedStation
        })
     }
     static async getIndexSummary(station){
        const allowedAttributes = ["id", "name", "line", "location", "imgUrl"]
        let serializedStation = {}
        for (const attribute of allowedAttributes) {
            serializedStation[attribute] = station[attribute]
        }
        return serializedStation
     }
}

export default StationSerializer