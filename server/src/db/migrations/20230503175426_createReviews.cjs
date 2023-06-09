/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("reviews", (table) => {
        table.bigIncrements("id")
        table.text("body").notNullable()
        table.integer("rating").notNullable()
        table.boolean("hasPolicePresence").defaultTo(false)
        table.boolean("hasSittingWater").defaultTo(false)
        table.bigInteger("stationId").unsigned().notNullable().index().references("stations.id")
        table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("reviews")
}
