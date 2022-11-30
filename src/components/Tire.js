import { React } from 'react';
import Rim from './Rim';

const Tire = (tire) => {
	const { size } = tire;

	return <div>
		<div
			style={
				{
					width: `${ size }px`,
					height: `${ size }px`,
					position: 'absolute',
				}
			}
			className="tire"
		><Rim/>
		</div>
	</div>;
};

export default Tire;
