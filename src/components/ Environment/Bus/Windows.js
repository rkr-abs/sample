import { map } from '@laufire/utils/collection';
import { React } from 'react';
import getWindows from '../../../services/getWindows';
import Window from './Window';

const Windows = () => map(getWindows, (window, i) =>

	<Window key={ i } { ...window }/>);

export default Windows;
