import { map } from '@laufire/utils/collection';
import { React } from 'react';
import windows from '../../../services/windows';
import Window from './Window';

const Windows = () => map(windows, (window, i) =>

	<Window key={ i } { ...window }/>);

export default Windows;
