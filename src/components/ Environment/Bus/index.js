import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Fenders from './Fenders';
import Windows from './Windows';
import BusName from './BusName';
import RearWindow from './RearWindow';
import FrontLight from './FrontLight';
import BackLight from './BackLight';

const Bus = () =>
	<div className="bus">
		<FrontWindow/>
		<FrontLight/>
		<Door/>
		<BusName/>
		<Windows/>
		<Fenders/>
		<BackLight/>
		<RearWindow/>
	</div>;

export default Bus;
