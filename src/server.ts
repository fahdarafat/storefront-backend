import express from 'express'
import routes from './handlers/index'
import cors from 'cors'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"
app.use(cors());
app.use(express.json())
app.use('/', routes);
app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!!!')
})


app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
