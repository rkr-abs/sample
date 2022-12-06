import { React } from 'react';
import './App.scss';
import Road from './components/ Environment/Road/index';
import Buses from './components/ Environment/Buses';
const App = (context) =>
	<div className="App" role="App">
		<Buses { ...context }/>
		<Road/>
	</div>;

export default App;
