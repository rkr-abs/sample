import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Tire from './Tire';

const Tires = (context) => {
	const { state: { tires }} = context;

	return map(tires, (tire, i) => <div key={ i }> <Tire { ...tire }/></div>);
};

export default Tires;
