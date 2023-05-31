import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mssql from 'mssql'

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ origin: "*" }))

// MSSQL connection
try {
    const con = await mssql.connect({
        server: 'ASHWINKV-LT',
        database: 'ReactTraining',
        options: {
            trustedConnection: true
        }
    })
    console.log("Connected to MSSQL server")
}
catch (err) {
    console.error("Unable to connect to MSSQL server\n" + err)
}


app.get('/', (req, res) => {
    res.send('Backend server running!')
})

// get all users from database
app.get('/users', (req, res) => {
    console.log("GET /users")


})


app.listen(port, () => console.log(`Server listening on port ${port}!`))