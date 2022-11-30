import { React } from 'react';
import Tire from './Tire';

const Fender = (tire) => {
	const { fender } = tire;

	return (
		<div>

			<div
				className={ fender }
			><div className="wheels"><Tire { ...tire }/></div>

			</div>
		</div>);
};

export default Fender;
