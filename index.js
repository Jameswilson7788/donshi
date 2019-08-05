const minimist = require('minimist')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0]
    switch (cmd) {
        case "today":
            require('./cmds/today')(args)
            break
        case "week":
            require('./cmds/week')(args)
            break
        case "help":
            require('./cmds/help')(args)
            break
        case "express":
            require('./express')(args)
            break  
        default:
            require('./cmds/help.js')(args)
    }
}
