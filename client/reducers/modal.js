const initialState = { modalType: null };

const modal = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MODAL':
			return {
				modalType: action.modalType
			};
		default:
			return initialState;
	}
};

export default modal;