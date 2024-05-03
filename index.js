const app = require('./app')
const { dbConnect } = require('./config')
const { PORT } = require('./envSetup')

const port = PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
