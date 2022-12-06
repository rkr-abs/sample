import bus from '../services/bus';

const getBuses = () => ({
	buses: [bus()],
});
const deleteBuses = () => ({
	buses: [],
});
const addBus = ({ state: { buses }}) => ({
	buses: [...buses, bus()],
});

const actions = { getBuses, deleteBuses, addBus };

export default actions;
