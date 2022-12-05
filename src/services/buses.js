/* eslint-disable no-magic-numbers */
import { map, range } from '@laufire/utils/collection';

const rangeNum = 2;
const wSize = 40;
const left = 40;
const top = 50;
const hSize = 40;

const buses = map(range(0, rangeNum), (number) => ({
	width: (number * 10) + wSize,
	height: (number * 10) + hSize,
	// eslint-disable-next-line no-magic-numbers
	x: (number * 10) + left,
	// eslint-disable-next-line no-magic-numbers
	y: (number * 10) + top,

}));

export default buses;
