import { React } from 'react';

const Window = ({ size, x, y }) =>
	<div
		className="window"
		style={
			{
				width: `${ size }px`,
				height: `${ size }px`,
				transform: `translate(${ x }%,-${ y }px)`,
			}
		}
	/>;

export default Window;
