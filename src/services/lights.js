import { map, range } from '@laufire/utils/collection';

const rangeNum = 2;
const wSize = 10;
const left = 1190;
const top = 300;
const hSize = 50;

const lights = map(range(0, rangeNum), (number) => ({
	width: wSize,
	height: hSize,
	x: number * left,
	y: top,

}));

export default lights;
