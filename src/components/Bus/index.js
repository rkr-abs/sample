import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Fenders from './Fenders';
import Windows from './Windows';
import BusName from './BusName';
import Lights from './Lights';
import RearWindow from './RearWindow';

const Bus = (context) =>
	<div className="bus">
		<FrontWindow/>
		<Door/>
		<BusName/>
		<Windows { ...context }/>
		<Fenders { ...context }/>
		<Lights/>
		<RearWindow/>
	</div>;

export default Bus;
