import express from "express"
import "./models/index.js"
import kapal from "./models/kapal.js"
import kereta from "./models/kereta.js"
import pesawat from "./models/pesawat.js"
import ticketingBus from "./models/ticketingBus.js"
import penginapan from "./models/penginapan.js"
import pemesanan from "./models/pemesanan.js"
import review from "./models/review.js"
import payment from "./models/payment.js"
import diskon from "./models/diskon.js"
import client from "./models/client.js"

const port = process.env.PORT

const app = express()


app.listen(3000, () => {
    console.log("mission statooo")
})