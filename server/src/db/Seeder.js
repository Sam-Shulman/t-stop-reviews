/* eslint-disable no-console */
import { connection } from "../boot.js"
import StationSeeder from "./seeders/StationSeeder.js"
class Seeder {
  static async seed() {
    console.log("seeding stations")
    await StationSeeder.seed()
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder