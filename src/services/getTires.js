import { map, range } from '@laufire/utils/collection';

const size = 100;
const left = 110;
const top = 150;
const two = 2;
const three = 3;
const fenSize = 120;
const leftFender = 140;
const rightFender = 560;
const fenderLeft = [leftFender, rightFender];
const fenderTop = 30;
const wSize = 170;
const hSize = 70;

const getTires = map(range(1, three), (number, i) => ({
	size: size,
	x: Math.pow(number, two) * left,
	y: top,
	fenderSize: fenSize * two,
	fenderLeft: fenderLeft[i],
	fenderTop: fenderTop,
	wSize: wSize,
	hSize: hSize,
}));

export default getTires;
