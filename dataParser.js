module.exports = {
	getFilteredAnimals: function (data, pattern) {
		const regex = new RegExp(pattern);
		return data.filter((value) => {
			return value.name.match(regex);
		});
	},
	getFilteredPeople: function (data, pattern, index = 0, response = []) {
		if (typeof data[index] === "undefined")  {
			return response;
		}
		response.push({
			name: data[index].name,
			animals: this.getFilteredAnimals(data[index].animals, pattern)
		});
		return this.getFilteredPeople(data, pattern, index + 1, response);
	},
	filter: function (data, pattern, index = 0, response = []) {
		if (typeof data[index] === "undefined")  {
			return response;
		}
		response.push({
			name: data[index].name,
			people: this.getFilteredPeople(data[index].people, pattern)
		});
		return this.filter(data, pattern, index + 1, response);
	},
	countAnnimals: function (data, index = 0, response = []) {
		if (typeof data[index] === "undefined")  {
			return response;
		}
		response.push({
			name: data[index].name + ` [${data[index].animals.length}]`,
			animals: data[index].animals
		});
		return this.countAnnimals(data, index + 1, response);
	},
	count: function (data, index = 0, response = []) {
		if (typeof data[index] === "undefined")  {
			return response;
		}
		response.push({
			name: data[index].name + ` [${data[index].people.length}]`,
			people: this.countAnnimals(data[index].people)
		});
		return this.count(data, index + 1, response);
	},
	prettyPrint: function (obj) {
		return JSON.stringify(obj, null, 2);
	}
};