import { React } from 'react';
import Tire from './Tire';

const Fender = (tire) => {
	const { fenderSize, fender, x } = tire;

	return (
		<div>

			<div
				style={ {
					width: `${ fenderSize }px`,
					height: `${ fenderSize }px`,
					transform: `translate(${ x }%,0%)`,
					position: 'absolute',
				} }
				className={ fender }
			>
				<Tire { ...tire }/>
			</div>
		</div>);
};

export default Fender;
