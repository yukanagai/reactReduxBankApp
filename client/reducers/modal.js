const initialState = {
	modalType: null
};

export default function modal(state = initialState, action) {
	switch(action.type) {
		case 'SHOW_MODAL' :
			return action.modalType.modalType;
		case 'HIDE_MODAL' :
			return null;
		default :
			return state;
	};
};