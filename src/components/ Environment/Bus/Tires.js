import { map } from '@laufire/utils/collection';
import { React } from 'react';
import tires from '../../../services/tires';
import Tire from './Tire';

const Tires = () =>
	map(tires, (tire, i) => <Tire key={ i } { ...tire }/>);

export default Tires;
