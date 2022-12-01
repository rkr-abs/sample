import { React } from 'react';

const DoorPanel = ({ width, height, x, y }) =>
	<div
		className="doorPanel"
		style={
			{
				width: `${ width }px`,
				height: `${ height }px`,
				left: `${ x }%`,
				top: `${ y }%`,
			}
		}
	/>;

export default DoorPanel;
