import app from './app'
// import { io, httpServer } from './config'
import { PORT } from './envSetup'

//port config
const port = PORT || 5000

//server config
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
