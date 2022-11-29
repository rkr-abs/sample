import { React } from 'react';
import Door from './Door';
import Fenders from './Fenders';
import FrontWindow from './FrontWindow';
import Tires from './Tires';
import Windows from './Windows';
const Bus = (context) =>
	<div className="bus">
		<FrontWindow/>
		<Door/>
		<Windows { ...context }/>
		<Fenders/>
		<Tires { ...context }/>
	</div>;

export default Bus;
