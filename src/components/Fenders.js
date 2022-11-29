import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Fender from './Fender';

const Fenders = ({ state: { tires }}) =>
	map(tires, (tire, i) => <Fender key={ i } { ...tire }/>);

export default Fenders;
