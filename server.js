import express from "express";
import routes from "./routes/routes.js";
import cors from "cors"
import checkDoubles from "./utils/checkDoubles.js";
const PORT =  3001 

const app = express()

app.use(cors()) // Use this after the variable declaration

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log("server lancé sur le port " + PORT)
})
