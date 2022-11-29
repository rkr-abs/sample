import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Tire from './Tire';

const Tires = ({ state: { tires }}) =>
	map(tires, (tire, i) => <Tire key={ i } { ...tire }/>);

export default Tires;
