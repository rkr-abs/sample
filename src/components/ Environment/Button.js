import { React } from 'react';

const Button = (context) => {
	const { actions } = context;

	return <div>
		<button
			onClick={ () => actions.getBuses() }
		>
			Click Me!
		</button>
		<button
			onClick={ () => actions.deleteBuses() }
		>
			Delete
		</button>
		<button
			onClick={ () => actions.addBus(context) }
		>
			addBus
		</button>
	</div>;
};

export default Button;
