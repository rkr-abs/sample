import { map, range } from '@laufire/utils/collection';

const five = 4;
const height = 30;
const width = 10;
const left = 30;
const top = 40;
const diff = 15;
const windows = map(range(0, five), (number) => ({
	width: width,
	height: height,
	x: (number * diff) + left,
	y: top,
}));

export default windows;
