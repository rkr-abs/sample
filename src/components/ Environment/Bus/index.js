import { React } from 'react';
import Door from './Door';
import FrontWindow from './FrontWindow';
import Fenders from './Fenders';
import Windows from './Windows';
import RearWindow from './RearWindow';
import Lights from './Lights';
import Roof from './Roof';
import Tires from './Tires';
import SideMirror from './SideMirror';

const Bus = ({ width, height, x, y }) =>
	<div
		className="bus"
		style={ {
			width: `${ width }%`,
			height: `${ height }%`,
			top: `${ y }%`,
			left: `${ x }%`,
		} }
	>
		<FrontWindow/>
		<SideMirror/>
		<Roof/>
		<Lights/>
		<Door/>
		<Windows/>
		<Fenders/>
		<Tires/>
		<RearWindow/>
	</div>;

export default Bus;
