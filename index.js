const Data = require('./data')
const data = new Data()
const express = require('express')
const app = express()


app.get('/' , (req, res) => {
    var result = data.getBank()
    console.log(result)
    res.status(200).json({
        data: result
    })
})
app.listen(443, () => {
    console.log('rodando')
})