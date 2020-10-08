module.exports.postgres = {
    name: 'redis',
    parse: function (args) {
        console.log('parsing arguments ... [%a]', this.args);
    },
    help: function (args) {
        console.log('Help for %s', this.name);
    },
    run: function (args) {
        console.log('Running %s', this.name);
    }
};
