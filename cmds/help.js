const ora = require('ora')


module.exports = async (args) => {
    const spinner = ora().start()

    try {
        spinner.stop()
        console.log("請輸入以下的參數查詢：")
        console.log("------------------------")
        console.log("today 查詢今天東勢的天氣")
        console.log("week 查詢這一周東勢的氣溫")
        
    } catch (err) {
        console.error(err)
    }
}