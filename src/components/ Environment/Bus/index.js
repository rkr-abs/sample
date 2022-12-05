import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Fenders from './Fenders';
import Windows from './Windows';
import BusName from './BusName';
import RearWindow from './RearWindow';
import Lights from './Lights';
import Roof from './Roof';
import Tires from './Tires';
import SideMirror from './SideMirror';

const Bus = () =>
	<div className="bus">
		<FrontWindow/>
		<SideMirror/>
		<Roof/>
		<Lights/>
		<Door/>
		<BusName/>
		<Windows/>
		<Fenders/>
		<Tires/>
		<RearWindow/>
	</div>;

export default Bus;
