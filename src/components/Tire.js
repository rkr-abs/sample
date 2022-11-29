import { React } from 'react';
import Fenders from './Fenders';
import Rim from './Rim';

const Tire = (tire) => {
	const { size, x, y } = tire;

	return (
		<div>
			<Fenders { ...tire }/>
			<div
				style={
					{
						width: `${ size }px`,
						height: `${ size }px`,
						transform: `translate(${ x }%,${ y }%)`,
						position: 'absolute',
					}
				}
				className="tire"
			>
				<Rim { ...tire }/></div>
		</div>);
};

export default Tire;
