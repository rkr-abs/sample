import { React } from 'react';
import './App.scss';
import Road from './components/Environment/Road/';
import Bus from './components/Environment/Bus/';

const App = () =>
	<div className="App" role="App">
		<Bus/>
		<Road/>
	</div>;

export default App;
