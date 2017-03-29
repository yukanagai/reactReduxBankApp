export default function balance(state = 1234.00, action) {
	switch(action.type) {
		case 'DEPOSIT_BALANCE':
			let deposit = (state + Number(action.amount));
			return (Math.round(deposit * 100)/100);
		case 'WITHDRAW_BALANCE' :
			let withdraw = (state - Number(action.amount));
			return (Math.round(withdraw * 100)/100);
		default: 
			return state;
	}
};