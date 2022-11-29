import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const Windows = (context) => {
	const { state: { windows }} = context;

	return map(windows, (window, i) =>
		<div key={ i }>
			<Window { ...window }/>
		</div>);
};

export default Windows;
