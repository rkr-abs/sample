import { rndBetween } from '@laufire/utils/lib';

// const rangeNum = 2;
const wSize = 90;
const left = 40;
const top = 100;
const start = 50;
const hSize = 80;
const ten = 50;
const size = Math.random().toFixed(1);

const bus = () => ({
	width: wSize * size,
	height: hSize * size,
	x: rndBetween(ten, left),
	y: rndBetween(start, top),
});

export default bus;
