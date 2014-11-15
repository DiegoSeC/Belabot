var casper = require("casper").create({
pageSettings: {
loadImages: false,
loadPlugins: true
}
});


var clock_in = require('../plugins/clock_in');
casper.run();
console.log(casper.lastRegistry);
console.log("fin");