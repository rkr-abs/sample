import { React } from 'react';

const Light = ({ width, height, x, y }) =>
	<div
		className="light"
		style={
			{
				width: `${ width }px`,
				height: `${ height }px`,
				transform: `translate(${ x }px,${ y }px)`,
			}
		}
	/>;

export default Light;
