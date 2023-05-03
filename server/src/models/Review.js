const Model = require("./Model")

class Review extends Model {
    static get tableName() {
        return "reviews"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["name", "rating", "stationId"],
            properties: {
                name: { type: "string" },
                rating: { type: ["integer", "string"] },
                hasPolicePresence: { type: ["boolean", "string"] },
                hasSittingWater: { type: ["boolean", "string"] },
                story: { type: ["string"]},
            }
        }
    }

    static get relationMappings() {
        const { Station } = require("./index.js")
        return {
            station: {
                relation: Model.BelongsToOneRelation,
                modelClass: Station,
                join: {
                    from: "reviews.stationId",
                    to: "stations.id"
                }
            }
        }
    }
}

module.exports = Review