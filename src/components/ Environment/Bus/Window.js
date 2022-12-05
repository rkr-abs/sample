import { React } from 'react';

const Window = ({ width, height, x, y }) =>
	<div
		className="window"
		style={
			{
				width: `${ width }%`,
				height: `${ height }%`,
				top: `${ y }%`,
				left: `${ x }%`,
			}
		}
	/>;

export default Window;
