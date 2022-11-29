import { React } from 'react';

const Window = (window) => {
	const { size, x, y } = window;

	return (

		<div
			style={
				{
					width: `${ size }px`,
					height: `${ size }px`,
					transform: `translate(${ x }px,${ y }px)`,
					position: 'absolute',
				}
			}
			className="window"
		/>);
};

export default Window;
