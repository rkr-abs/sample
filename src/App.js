import { React } from 'react';
import './App.scss';
import Bus from './components/ Environment/Bus/index';
import Road from './components/ Environment/Road/index';

const App = () =>
	<div className="App" role="App">
		<Bus/>
		<Road/>
	</div>;

export default App;
