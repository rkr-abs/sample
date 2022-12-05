import { map, range } from '@laufire/utils/collection';

const rangeNum = 2;
const wSize = 45;
const left = 25;
const top = 50;
const hSize = 90;
const diff = 50;

const doorPanels = map(range(0, rangeNum), (number) => ({
	width: wSize,
	height: hSize,
	x: (number * diff) + left,
	y: top,

}));

export default doorPanels;
