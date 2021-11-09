/* 
Note:
Chalk module in Node.js is the third-party module that is used for styling the format of text and allows 
us to create our own themes in the node.js project.

Advantages of Chalk Module:

It helps to customize the color of the output of the command-line output
It helps to improve the quality of the output by providing several color options like for warning message red color and many more
*/

const chalk = require('chalk');
const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre'


const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

// Printing the text
console.log(chalk.red("vijendra"))
console.log(chalk.red.underline("vijendra"))
console.log(chalk.red.underline.bold("TY"))