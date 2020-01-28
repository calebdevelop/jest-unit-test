module.exports = () => {
	var myArgs = process.argv.slice(2);

	var args = {};

	var argRegExp = /\-\-(.*)/;
	var argKeyValueRegExp = /\-\-(.*)\=(.*)/;

	myArgs.forEach((val) => {
		var matches = val.match(argRegExp);
		if (matches) {
			var argKeyValue = null;
			if (argKeyValue = val.match(argKeyValueRegExp)) {
				args[argKeyValue[1]] = argKeyValue[2];
			} else {
				args[matches[1]] = null;
			}
		}
	});

	return args;
}