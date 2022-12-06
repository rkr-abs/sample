import { React } from 'react';

const Fender = (tire) => {
	const { wSize, hSize, fenderLeft, fenderTop } = tire;

	return (
		<div
			className="fenders"
			style={
				{
					width: `${ wSize }%`,
					height: `${ hSize }%`,
					left: `${ fenderLeft }%`,
					top: `${ fenderTop }%`,
				}
			}
		/>
	);
};

export default Fender;
