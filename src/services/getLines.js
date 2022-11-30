import { map, range } from '@laufire/utils/collection';

const rangeNum = 10;
const wSize = 40;
const left = 500;
const top = 600;
const hSize = 20;

const getLines = map(range(0, rangeNum), (number) => ({
	width: wSize,
	height: hSize,
	x: number * left,
	y: top,
}));

export default getLines;
