const Model = require("./Model")

class Review extends Model {
    static get tableName() {
        return "reviews"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["body", "rating", "stationId", "userId"],
            properties: {
                body: { type: "string" },
                rating: { type: ["integer", "string"] },
                hasPolicePresence: { type: ["boolean", "string"] },
                hasSittingWater: { type: ["boolean", "string"] },
                stationId: {type: ["string", "integer"]},
                userId: {type: ["string", "integer"]}
            }
        }
    }

    static get relationMappings() {
        const { Station, User } = require("./index.js")
        return {
            station: {
                relation: Model.BelongsToOneRelation,
                modelClass: Station,
                join: {
                    from: "reviews.stationId",
                    to: "stations.id"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "reviews.userId",
                    to: "users.id"
                }
            }

        }
    }
}

module.exports = Review