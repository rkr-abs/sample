import { React } from 'react';

const Light = ({ width, height, x, y }) =>
	<div
		className="light"
		style={
			{
				width: `${ width }px`,
				height: `${ height }px`,
				top: `${ y }%`,
				left: `${ x }%`,

			}
		}
	/>;

export default Light;
