import { map } from '@laufire/utils/collection';
import { React } from 'react';
import buses from '../../services/buses';
import Bus from './Bus';

const Buses = () => map(buses, (bus, i) =>

	<Bus key={ i } { ...bus }/>);

export default Buses;
