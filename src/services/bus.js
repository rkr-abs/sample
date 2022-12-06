import { rndBetween } from '@laufire/utils/lib';

const width = 90;
const left = 40;
const top = 100;
const startYPos = 50;
const height = 80;
const startXPos = 50;
const size = Math.random().toFixed(1);

const bus = () => ({
	width: width * size,
	height: height * size,
	x: rndBetween(startXPos, left),
	y: rndBetween(startYPos, top),
});

export default bus;
