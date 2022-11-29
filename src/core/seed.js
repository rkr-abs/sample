/* eslint-disable no-magic-numbers */
import { map, range } from '@laufire/utils/collection';
const size = 100;
const fenderName = ['fender1', 'fender2'];

const tires = map(range(1, 3), (number, i) => ({
	size: size * 2,
	x: Math.pow(number, 2) * 110,
	y: 150,
	rimSize: size / 2,
	fenderSize: size,
	fender: fenderName[i],
}));

const windows = map(range(1, 5), (number) => ({
	size: size,
	x: number * 220,
	y: 75,
}));

const seed = {
	tires,
	windows,
};

export default seed;
