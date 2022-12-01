import { React } from 'react';

const Window = ({ size, x, y }) =>
	<div
		className="window"
		style={
			{
				width: `${ size }px`,
				height: `${ size }px`,
				top: `${ y }%`,
				left: `${ x }%`,
			}
		}
	/>;

export default Window;
