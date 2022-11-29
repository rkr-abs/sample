import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Tires from './Tires';
import Windows from './Windows';
const Bus = (context) =>
	<div className="bus">
		<FrontWindow/>
		<Door/>
		<Windows { ...context }/>
		<Tires { ...context }/>
	</div>;

export default Bus;
