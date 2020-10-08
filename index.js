#!/usr/bin/env node
console.log("tubu.sh welcomes you!");

const path = require('path');

const args = process.argv.slice(2);

const modulesPath = './modules/';

const files = require('fs').readdirSync(modulesPath);
const modules = [];

files.forEach(function (file) {
    var mod = require(modulesPath + file);


    // mod is a function with a name, so use it!
    if (mod instanceof Function) {
        modules[mod.name] = mod;
    } else {
        Object.keys(mod).forEach(function (property) {
            modules[property] = mod[property];
        });
    }
}, {});

console.log('Modules Loadede : %s ', Object.keys(modules));

/**
 * takes argunments given and parse it. 
 * dispatch the argument regarding to the js scripts inside of modules folder
 * each module will have a parse, run, help and error function  
 * @param {arguments} args 
 */
const run = function (args) {
    const moduleName = args[1];
    const module = modules[moduleName];
    if (module == undefined) {
        console.log('Can not find module %s', moduleName);
    } else {
        module.run();
    }
};

const help = function (args) {
    console.log('please use " >tubu.sh run module "');
};

switch (args[0]) {
    case 'run':
        run(args); break;
    case 'stop':
        stop(args); break;
    case 'help':
    default:
        help(args);
}

