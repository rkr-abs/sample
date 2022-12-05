import { React } from 'react';
import Rim from './Rim';

const Tire = ({ size, tiresTop, fenderLeft }) =>
	<div
		className="tire"
		style={ {
			top: `${ tiresTop }%`,
			left: `${ fenderLeft }%`,
		} }
	>
		<div
			className="rim"
			style={
				{
					width: `${ size }%`,
					height: `${ size }%`,
					position: 'absolute',
				}
			}
		><Rim/>
		</div>
	</div>;

export default Tire;
