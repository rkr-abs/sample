import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Fenders from './Fenders';
import Windows from './Windows';
import BusName from './BusName';
import RearWindow from './RearWindow';
import Lights from './Lights';

const Bus = () =>
	<div className="bus">
		<FrontWindow/>
		<Lights/>
		<Door/>
		<BusName/>
		<Windows/>
		<Fenders/>
		<RearWindow/>
	</div>;

export default Bus;
