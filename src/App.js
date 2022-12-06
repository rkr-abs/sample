import { React } from 'react';
import './App.scss';
import Road from './components/ Environment/Road/index';
import Buses from './components/ Environment/Buses';
import Button from './components/ Environment/Button';

const App = (context) =>
	<div className="App" role="App">
		<Button { ...context }/>
		<Buses { ...context }/>
		<Road/>
	</div>;

export default App;
