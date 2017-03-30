const initialState = { balance: 0 };

const balance = (state = initialState, action) => {
	switch (action.type) {
		case 'DEPOSIT_TRANSACTION':
			return {
				balance: (state.balance + Number(action.amount)*100/100)
			};
		case 'WITHDRAW_TRANSACTION':
			return {
				balance: (state.balance - Number(action.amount)*100/100)
			};
		default:
			return state;
	}
};

export default balance;