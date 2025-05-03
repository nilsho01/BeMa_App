import http from 'http'
import app from "./app"
import { exit } from "process"
import { connectToDatabase } from "./db/connection"


const PORT = process.env.PORT || 5000
console.log("Try to connect to database")
connectToDatabase().then(() => {
    const httpServer = http.createServer(app)

    httpServer.listen(PORT, () => console.log(`Server Open at ${PORT} & connected to Database`))
}).catch((err) => console.log(err))