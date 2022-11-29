/* eslint-disable no-magic-numbers */
import { map, range } from '@laufire/utils/collection';
const size = 100;
const fenderName = ['fender1', 'fender2'];

const tires = map(range(1, 3), (number, i) => ({
	size: size,
	x: number === 2 ? (number * 300) + 30 : number * 300,
	y: 350,
	rimSize: size / 2,
	fenderSize: size * 2,
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
