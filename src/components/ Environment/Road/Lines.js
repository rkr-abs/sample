import { map } from '@laufire/utils/collection';
import { React } from 'react';
import lines from '../../../services/lines';
import Line from './Line';

const Lines = () => map(lines, (line, i) =>
	<Line key={ i } { ...line }/>);

export default Lines;
