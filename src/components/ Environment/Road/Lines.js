import { map } from '@laufire/utils/collection';
import { React } from 'react';
import getLines from '../../../services/getLines';
import Line from './Line';

const Lines = () => map(getLines, (line, i) =>
	<Line key={ i } { ...line }/>);

export default Lines;
