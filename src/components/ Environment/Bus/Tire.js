import { React } from 'react';
import Rim from './Rim';

const Tire = ({ size }) =>
	<div
		className="rim"
		style={
			{
				width: `${ size }px`,
				height: `${ size }px`,
				position: 'absolute',
			}
		}
	><Rim/>
	</div>;

export default Tire;
