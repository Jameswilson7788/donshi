const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    let cmd = args._[0]
    switch (cmd) {
        case "today":
            require('./cmds/today')(args)
            break
    }
}
