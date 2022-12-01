import { React } from 'react';
import Tire from './Tire';

const Fender = (tire) => {
	const { wSize, hSize, fenderLeft, fenderTop } = tire;

	return (
		<div>
			<div
				className="fenders"
				style={
					{
						width: `${ wSize }px`,
						height: `${ hSize }px`,
						transform: `translate(${ fenderLeft }%,-${ fenderTop }%)`,
					}
				}
			>
				<div className="tire"><Tire { ...tire }/>
				</div>
			</div>
		</div>);
};

export default Fender;
