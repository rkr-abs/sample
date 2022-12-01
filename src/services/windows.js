import { map, range } from '@laufire/utils/collection';
const five = 4;
const size = 100;
const left = 25;
const top = 40;
const diff = 15;
const windows = map(range(0, five), (number) => ({
	size: size,
	x: (number * diff) + left,
	y: top,
}));

export default windows;
