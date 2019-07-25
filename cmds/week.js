const getWeather = require('../utils/weather').week
const ora = require('ora')
const C = require('../utils/tempCoverter')

module.exports = async (args) => {
    const spinner = ora().start()

    try {

        const weather = await getWeather()
        spinner.stop()

        console.log("預測這一個禮拜東勢的平均溫度是：")
        for (i=0; i<40; i+=8) {
            console.log(C(weather.list[i].main.temp));
        }
    } catch (err) {

        spinner.stop()
        console.log("天氣壞掉了吧QQ")
        console.error(err)
        
    }
}