const chalk = require('chalk');
const log = console.log;

log(chalk.blue('Happy') + ' ' + chalk.red('Birthday') + ' ' + chalk.green('to') + ' ' + chalk.magenta('you') + chalk.rgb(255, 136, 0)('!'));
log(chalk.yellow('Happy') + ' ' + chalk.cyan('Birthday') + ' ' + chalk.rgb(240,230,140)('to') + ' ' + chalk.rgb(0, 0, 255)('you') + chalk.rgb(255,105,180)('!'));
log(chalk.redBright('Happy') + ' ' + chalk.greenBright('Birthday') + ' ' + chalk.blueBright('dear') + ' ' + chalk.yellowBright('Goose') + chalk.rgb(112,128,144)('!'));
log(chalk.magenta('Happy') + ' ' + chalk.yellow('Birthday') + ' ' + chalk.cyan('to') + ' ' + chalk.whiteBright('you') + chalk.rgb(139,69,19)('!'));