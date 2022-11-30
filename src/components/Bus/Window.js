import { React } from 'react';

const Window = (window) => {
	const { size, x, y } = window;

	return (

		<div
			className="window"
			style={
				{
					width: `${ size }px`,
					height: `${ size }px`,
					transform: `translate(${ x }%,-${ y }px)`,
					position: 'absolute',
				}
			}
		/>);
};

export default Window;
