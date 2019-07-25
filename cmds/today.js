const getWeather = require('../utils/weather');
const ora = require('ora');
const C = require('../utils/tempCoverter');

module.exports = async (args) => {
    const spinner = ora().start()

    try {

        const weather = await getWeather()
        spinner.stop()

        console.log("今天東勢的溫度是：")
        console.log(C(weather.main.temp)+ "度C")
        console.log("打到你只能報天氣")

    } catch (err) {

        spinner.stop()
        console.log("天氣壞掉了吧QQ")
        console.err(err)
        
    }
}