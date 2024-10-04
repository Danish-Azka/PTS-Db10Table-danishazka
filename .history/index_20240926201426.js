import express from "express"
import "./models/index.js"
import Client from "./models/client.js"
import Bus from "./models/ticketingBus.js"
import Penginapan from "./models/penginapan.js"
import Pesawat from "./models/pesawat.js"
import Kapal from "./models/kapal.js"
import Kereta from "./models/kereta.js"
import 





const port = process.env.PORT

const app = express()


app.listen(3000, () => {
    console.log("mission statooo")
})