import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const Windows = ({ state: { windows }}) => map(windows, (window, i) =>

	<Window key={ i } { ...window }/>);

export default Windows;
