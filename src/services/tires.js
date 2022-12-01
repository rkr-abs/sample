import { map, range } from '@laufire/utils/collection';

const size = 100;
const three = 3;
const fenderDiff = 60;
const fenderLeft = 30;
const fenderTop = 90;
const wSize = 170;
const hSize = 70;

const tires = map(range(1, three), (number, i) => ({
	size: size,
	fenderLeft: (i * fenderDiff) + fenderLeft,
	fenderTop: fenderTop,
	wSize: wSize,
	hSize: hSize,
}));

export default tires;
