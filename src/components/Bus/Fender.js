import { React } from 'react';
import Tire from './Tire';

const Fender = (tire) => {
	const { fenderSize, fender, x } = tire;

	return (
		<div>

			<div
				className={ fender }
				style={ {
					width: `${ fenderSize }px`,
					height: `${ fenderSize }px`,
					transform: `translate(${ x }%,0%)`,
					position: 'absolute',
				} }
			><div className="wheels"><Tire { ...tire }/></div>

			</div>
		</div>);
};

export default Fender;
