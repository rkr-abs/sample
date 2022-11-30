import { map, range } from '@laufire/utils/collection';

const size = 100;
const fenderName = ['fender1', 'fender2'];
const left = 110;
const top = 150;
const two = 2;
const three = 3;
const fenSize = 120;

const getTires = map(range(1, three), (number, i) => ({
	size: size,
	x: Math.pow(number, two) * left,
	y: top,
	fenderSize: fenSize * two,
	fender: fenderName[i],
}));

export default getTires;
