import { React } from 'react';

const Button = (context) => {
	const { actions } = context;

	return <div>
		<button
			onClick={ () => actions.deleteBuses() }
		>
			Delete
		</button>
		<button
			onClick={ () => actions.addBus(context) }
		>
			AddBus
		</button>
	</div>;
};

export default Button;
