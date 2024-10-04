import express from "express"
import "./models/index.js"
import Client from "./models/client.js"










const port = process.env.PORT

const app = express()


app.listen(3000, () => {
    console.log("mission statooo")
})