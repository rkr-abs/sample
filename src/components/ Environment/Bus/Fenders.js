import { map } from '@laufire/utils/collection';
import { React } from 'react';
import tires from '../../../services/tires';
import Fender from './Fender';

const Fenders = () =>
	map(tires, (tire, i) => <Fender key={ i } { ...tire }/>);

export default Fenders;
