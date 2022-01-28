import express from 'express'
import bodyParser from 'body-parser'
import Client from './database'
import routes from './handlers/index'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())
app.use('/', routes);
app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!!!')
})


app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
