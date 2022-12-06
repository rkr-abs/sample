import { map } from '@laufire/utils/collection';
import { React } from 'react';
import Bus from './Bus';

const Buses = ({ state: { buses }}) => map(buses, (bus, i) =>

	<Bus key={ i } { ...bus }/>);

export default Buses;
