import express from "express"
import "./models/index.js"
import kapal from "./models/kapal.js"
import kereta from "./models/kereta.js"
import pesawat from "./models/pesawat.js"
import ticketingBus from "./models/ticketingBus.js"

const port = process.env.PORT

const app = express()


app.listen(3000, () => {
    console.log("mission statooo")
})