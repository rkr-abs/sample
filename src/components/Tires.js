import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Tire from './Tire';

const Tires = (context) => {
	const { state: { tires }} = context;

	return map(tires, (tire, i) => <Tire key={ i } { ...tire }/>);
};

export default Tires;
