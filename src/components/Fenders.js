import { React } from 'react';

const Fenders = ({ fenderSize, fender }) =>
	<div
		style={
			{
				width: `${ fenderSize }px`,
				height: `${ fenderSize }px`,
				position: 'absolute',
			}
		}
		className={ fender }
	/>;

export default Fenders;
