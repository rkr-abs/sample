import { React } from 'react';
import Rim from './Rim';
const Fenders = (tire) => {
	const { fenderSize, fender } = tire;

	return <div>
		<div
			style={ {
				width: `${ fenderSize }px`,
				height: `${ fenderSize }px`,
				position: 'absolute',
			} }
			className={ fender }
		><Rim { ...tire }/></div></div>;
};

export default Fenders;
