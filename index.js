const Data = require('./data')
const data = new Data()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.get('/' , (req, res) => {
    var result = data.getBank()
    console.log(result)
    res.status(200).json({
        data: result
    })
})
app.listen(port, () => {
    console.log('rodando')
})