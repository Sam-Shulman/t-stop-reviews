/* eslint-disable no-console */
import { connection } from "../boot.js"
import StationSeeder from "./seeders/StationSeeder.js"
import UsersSeeder from "./seeders/UsersSeeder.js"
class Seeder {
  static async seed() {
    console.log("seeding stations")
    await UsersSeeder.seed()
    await StationSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder