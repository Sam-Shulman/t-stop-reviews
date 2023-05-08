/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("stations", (table) => {
      table.string("imgUrl").notNullable()
    })
  }
  
  /**
   * @param {Knex} knex
   */
  exports.down = async (knex) => {
    return knex.schema.table("stations", (table) => {
      table.dropColumn("imgUrl")
    })
  }