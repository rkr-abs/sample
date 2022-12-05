import { map, range } from '@laufire/utils/collection';

const size = 70;
const three = 3;
const fenderDiff = 60;
const fenderLeft = 30;
const fenderTop = 90;
const tiresTop = 100;
const wSize = 18;
const hSize = 18;

const tires = map(range(1, three), (number, i) => ({
	size: size,
	fenderLeft: (i * fenderDiff) + fenderLeft,
	fenderTop: fenderTop,
	wSize: wSize,
	hSize: hSize,
	tiresTop: tiresTop,
}));

export default tires;
