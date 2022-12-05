import { React } from 'react';

const DoorPanel = ({ width, height, x, y }) =>
	<div
		className="doorPanel"
		style={
			{
				width: `${ width }%`,
				height: `${ height }%`,
				left: `${ x }%`,
				top: `${ y }%`,
			}
		}
	/>;

export default DoorPanel;
