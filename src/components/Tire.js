import { React } from 'react';
import Fenders from './Fenders';

const Tire = (tire) => {
	const { size, x, y } = tire;

	return (
		<div>
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
				<Fenders { ...tire }/>
			</div>
		</div>);
};

export default Tire;
