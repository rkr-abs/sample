import { map } from '@laufire/utils/collection';
import { React } from 'react';
import getWindow from '../../services/getWindows';
import Window from './Window';

const Windows = () => map(getWindow().windows, (window, i) =>

	<Window key={ i } { ...window }/>);

export default Windows;
