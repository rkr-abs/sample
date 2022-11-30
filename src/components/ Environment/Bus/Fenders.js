import { map } from '@laufire/utils/collection';
import { React } from 'react';
import getTires from '../../../services/getTires';
import Fender from './Fender';

const Fenders = () =>
	map(getTires, (tire, i) => <Fender key={ i } { ...tire }/>);

export default Fenders;
