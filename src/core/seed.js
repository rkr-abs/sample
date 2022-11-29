/* eslint-disable no-magic-numbers */
import { map, range } from '@laufire/utils/collection';
const size = 100;
const tires = map(range(1, 3), (number) => ({
	size: size,
	x: number * 300,
	y: 350,
	rimSize: size / 2,
}));

const windows = map(range(1, 5), (number) => ({
	size: size,
	x: number * 200,
	y: 100,

}));

const seed = {
	tires,
	windows,
};

export default seed;
