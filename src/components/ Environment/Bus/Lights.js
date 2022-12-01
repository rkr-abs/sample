import { map } from '@laufire/utils/collection';
import { React } from 'react';
import lights from '../../../services/lights';
import Light from './Light';

const Lights = () =>
	map(lights, (light, i) => <Light key={ i } { ...light }/>);

export default Lights;
