import { map, range } from '@laufire/utils/collection';
const five = 5;
const size = 100;
const left = 220;
const top = 250;

const getWindows = map(range(1, five), (number) => ({
	size: size,
	x: number * left,
	y: top,
}));

export default getWindows;
