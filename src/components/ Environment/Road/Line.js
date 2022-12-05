import { React } from 'react';

const Line = ({ height, width, x, y }) =>
	<div
		className="roadLines"
		style={
			{
				width: `${ width }%`,
				height: `${ height }%`,
				top: `${ y }%`,
				left: `${ x }%`,
			}
		}
	/>;

export default Line;
