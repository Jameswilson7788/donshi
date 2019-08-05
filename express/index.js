const express = require('express')
const app = express()
const getWeather = require('../utils/weather').day
const C = require('../utils/tempCoverter')



app.get('/today', async(req, res, next) => {
    const weather = await getWeather()
    res.send({
        location:'東勢',
        temp: C(weather.main.temp),
        description: '打到你只能報天氣'
    })
})


app.listen(3000, () => {
    console.log('報天氣伺服器開啟:PORT=3000')
})

module.exports = async() => app;