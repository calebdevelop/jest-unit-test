const dataParser = require('./dataParser');
const annimals = [
	{name: 'camel'},
	{name: 'bee'},
	{name: 'beaver'},
	{name: 'baboon'},
	{name: 'water buffalo'},
	{name: 'cat'},
	{name: 'beetle'}
];
const country = [
	{
		name: 'Madagascar',
		people: [
			{
				name: 'Rings Tones',
				animals: [
					{name: 'camel'},
					{name: 'bee'},
					{name: 'beaver'},
					{name: 'baboon'},
					{name: 'water buffalo'},
					{name: 'cat'},
					{name: 'beetle'}
				]
			},
			{
				name: 'tarask',
				animals: [
					{name: 'cattle'},
					{name: 'chicken'},
					{name: 'cat'}
				]
			}
		]
	},
	{
		name: 'France',
		people: [
			{
				name: 'François',
				animals: [
					{name: 'carab ao'},
					{name: 'duck'},
					{name: 'carabao'},
					{name: 'dog'},
					{name: 'badger'}
				]
			}
		]
	}
];
const mockFunc = jest
	.fn()
	.mockImplementationOnce(() => [])
	.mockImplementationOnce(() => [
		{name: 'bee'},
		{name: 'beetle'}
	])
	.mockImplementationOnce(() => [
		{name: 'water buffalo'}
	])
	.mockImplementationOnce(() => [
		{
			name: 'Madagascar',
			people: [
				{
					name: 'Rings Tones',
					animals: [
						{name: 'baboon'}
					]
				}, 
				{
					name: 'tarask',
					animals: []
				}
			]
		},
		{
			name: 'France',
			people: [
				{
					name: 'François',
					animals: [
						{name: 'carabao'},
						{name: 'badger'},
					]
				}
			]
		}
	])
	.mockImplementationOnce(() => [
		{
			name: 'Madagascar [2]',
			people: [
				{
					name: 'Rings Tones [1]',
					animals: [
						{name: 'baboon'}
					]
				}, 
				{
					name: 'tarask [0]',
					animals: []
				}
			]
		},
		{
			name: 'France [1]',
			people: [
				{
					name: 'François [2]',
					animals: [
						{name: 'carabao'},
						{name: 'badger'},
					]
				}
			]
		}
	])

test('annimals filter empty', () => {
  expect(dataParser.getFilteredAnimals(annimals, 'bet')).toEqual(mockFunc());
});
test('annimals filter bee', () => {
  expect(dataParser.getFilteredAnimals(annimals, 'bee')).toEqual(mockFunc());
});
test('annimals filter with space', () => {
  expect(dataParser.getFilteredAnimals(annimals, 'ter bu')).toEqual(mockFunc());
});
test('annimals filter sensitive test', () => {
  expect(dataParser.getFilteredAnimals(annimals, 'Ter bu')).toEqual([]);
});
var filteredData = dataParser.filter(country, 'ba');
test('country filter', () => {
  expect(filteredData).toEqual(mockFunc());
});
test('count test', () => {
  expect(dataParser.count(filteredData)).toEqual(mockFunc());
});