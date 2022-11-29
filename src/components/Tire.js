import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import Rim from './Rim';

const Tire = (tire) => {
	const { size, x, y } = tire;

	peek(tire);
	return (
		<div>
			<div
				style={
					{
						width: `${ size }px`,
						height: `${ size }px`,
						transform: `translate(${ x }px,${ y }px)`,
						position: 'absolute',
					}
				}
				className="tire"
			>
				<Rim { ...tire }/></div>
		</div>);
};

export default Tire;
