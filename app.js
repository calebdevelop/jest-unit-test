var dataParser = require('./dataParser');
var data = require('./data').data;
var getConsoleArgs = require('./argParser');

var args = getConsoleArgs();

var filteredData = null;
if (typeof args.filter != 'undefined') {
	filteredData = dataParser.filter(data, args.filter);	
} else {
	filteredData = data;
}

if (typeof args.count != 'undefined') {
	filteredData = dataParser.count(filteredData);
}

console.log(dataParser.prettyPrint(filteredData));