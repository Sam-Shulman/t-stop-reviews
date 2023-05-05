/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("stations", (table) => {
      table.string("imgUrl")
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