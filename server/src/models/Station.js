const Model = require("./Model")

class Station extends Model {
    static get tableName() {
        return "stations"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["name", "line", "location"],
            properties: {
                name: { type: "string" },
                line: { type: "string" },
                location: { type: "string" }
            }
        }
    }

    static get relationMappings() {
        const { Review } = require("./index.js")
        return {
            reviews: {
                relation: Model.HasManyRelation,
                modelClass: Review,
                join: {
                    from: "stations.id",
                    to: "reviews.stationId"
                }
            }
        }
    }
}

module.exports = Station