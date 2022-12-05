import { React } from 'react';
import './App.scss';
import Buses from './components/ Environment/Buses';
import Road from './components/ Environment/Road/index';

const App = () =>
	<div className="App" role="App">
		<Buses/>
		<Road/>
	</div>;

export default App;
