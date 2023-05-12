const Model = require("./Model")

class Station extends Model {
    static get tableName() {
        return "stations"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["name", "line", "location", "imgUrl"],
            properties: {
                name: { type: "string" },
                line: { type: "string" },
                location: { type: "string" },
                imgUrl: { type: ["string"] }
            }
        }
    }

    static get relationMappings() {
        const { Review, User} = require("./index.js")
        return {
            reviews: {
                relation: Model.HasManyRelation,
                modelClass: Review,
                join: {
                    from: "stations.id",
                    to: "reviews.stationId"
                }
            },
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "movies.id",
                    through: {
                        from: "reviews.movieId",
                        to: "reviews.userId"
                    },
                    to: "users.id"
                }
            }   
        }
    }
}

module.exports = Station
