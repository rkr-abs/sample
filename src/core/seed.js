import { map, range } from '@laufire/utils/collection';

const rangeNum = 2;
const wSize = 40;
const left = 40;
const top = 50;
const hSize = 40;
const ten = 10;

const buses = map(range(0, rangeNum), (number) => ({
	width: (number * ten) + wSize,
	height: hSize,
	x: (number * ten) + left,
	y: (number * ten) + top,

}));
const seed = {
	buses,
};

export default seed;
