/* eslint-disable no-magic-numbers */
import { map, range } from '@laufire/utils/collection';

const windows = map(range(1, 5), (number) => ({
	size: 100,
	x: number * 220,
	y: 250,
}));

const getWindow = () => ({
	windows,
});

export default getWindow;
