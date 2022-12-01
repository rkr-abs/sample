import { React } from 'react';

const DoorPanel = ({ width, height, x, y }) =>
	<div
		className="doorPanel"
		style={
			{
				width: `${ width }px`,
				height: `${ height }px`,
				transform: `translate(${ x }%,${ y }%)`,
			}
		}
	/>;

export default DoorPanel;
