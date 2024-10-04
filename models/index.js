import db from "../utils/connection.js";

await db.sync({force : true})