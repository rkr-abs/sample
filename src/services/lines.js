import { map, range } from '@laufire/utils/collection';

const rangeNum = 5;
const wSize = 14;
const left = 20;
const top = 50;
const hSize = 4;

const lines = map(range(0, rangeNum), (number) => ({
	width: wSize,
	height: hSize,
	x: number * left,
	y: top,
}));

export default lines;
