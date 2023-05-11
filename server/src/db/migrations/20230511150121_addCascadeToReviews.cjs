/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("reviews", (table) => {
        table.dropForeign("stationId")
        table.foreign("stationId").references("stations.id").onDelete("CASCADE")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("reviews", (table) => {
        table.dropForeign("stationId")
        table.foreign("stationId").references("stations.id").onDelete("NO ACTION")
    })
}
