import { map } from '@laufire/utils/collection';
import { React } from 'react';
import doorPanels from '../../../services/doorPanels';
import DoorPanel from './DoorPanel';

const Door = () =>
	<div className="door">
		{map(doorPanels, (panel, i) => <DoorPanel key={ i } { ...panel }/>)}
	</div>;

export default Door;
