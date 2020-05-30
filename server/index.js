const express = require ('express')
const bodyParser = require ('body-parser')
const pdf = require ('html-pdf')
const cors = require ('cors')
const pdfTemplate = require('./documents')

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(posrt, () => console.log(`Lstening on port ${port}`))