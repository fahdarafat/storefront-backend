import express from 'express'
import bodyParser from 'body-parser'
import client from './database'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!!!')
})
app.get('/users', async (req, res) => {
    try {
        const users = await client.connect();
        res.send('Client connected successfully');
    } catch(err) {
        res.json(err)
    }
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
