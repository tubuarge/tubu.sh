#!/usr/bin/env node

console.log("tubu.sh welcomes you!");

var args = process.argv.slice(2);

//console.log(args);

const run = function (args) {
    console.log('Running %s', args[1]);
};

const help = function (args) {
    console.log('Help needed ', args[1]);
};

switch (args[0]) {
    case 'run':
        run(args); break;
    case 'help':
    default:
        help(args);
}

