import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Fenders from './Fenders';
import Windows from './Windows';
const Bus = (context) =>
	<div className="bus">
		<FrontWindow/>
		<Door/>
		<Windows { ...context }/>
		<Fenders { ...context }/>
	</div>;

export default Bus;
