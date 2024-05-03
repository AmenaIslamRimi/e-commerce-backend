import app from ''
// import { io, httpServer } from './config'
import { PORT } from './envSetup'

const app = require("./app");
const dbConnect = require("./utils/dbConn");

//port config
const port = PORT || 5000

//server config
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
