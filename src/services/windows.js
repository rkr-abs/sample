import { map, range } from '@laufire/utils/collection';
const five = 5;
const size = 100;
const left = 220;
const top = 250;

const windows = map(range(1, five), (number, i) => ({
	size: size,
	x: number * left,
	y: (i * size) + top,
}));

export default windows;
