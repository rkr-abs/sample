import getBuses from '../services/getBuses';

const deleteBuses = () => ({
	buses: [],
});
const addBus = (context) => ({
	buses: getBuses(context),
});

const actions = { deleteBuses, addBus };

export default actions;
