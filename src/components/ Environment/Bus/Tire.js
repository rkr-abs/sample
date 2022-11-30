import { React } from 'react';
import Rim from './Rim';

const Tire = ({ size }) => <div>
	<div
		className="tire"
		style={
			{
				width: `${ size }px`,
				height: `${ size }px`,
				position: 'absolute',
			}
		}
	><Rim/>
	</div>
</div>;

export default Tire;
