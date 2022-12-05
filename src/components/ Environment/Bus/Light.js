import { React } from 'react';

const Light = ({ width, height, x, y }) =>
	<div
		className="light"
		style={
			{
				width: `${ width }%`,
				height: `${ height }%`,
				top: `${ y }%`,
				left: `${ x }%`,

			}
		}
	/>;

export default Light;
