import { React } from 'react';

const Rim = ({ rimSize }) =>
	<div
		style={
			{
				width: `${ rimSize }px`,
				height: `${ rimSize }px`,
				transform: 'translate(50%,50%)',
				position: 'absolute',
			}
		}
		className="rim"
	/>;

export default Rim;
