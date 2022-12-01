import { map, range } from '@laufire/utils/collection';

const rangeNum = 2;
const wSize = 53;
const left = 10;
const top = 10;
const hSize = 300;
const diff = 120;

const doorPanels = map(range(0, rangeNum), (number) => ({
	width: wSize,
	height: hSize,
	x: (number * diff) + left,
	y: top,

}));

export default doorPanels;
