// DEPOSIT FROM BALANCE
export function deposit(amount) {
	return {
		type: 'DEPOSIT_TRANSACTION',
		amount
	}
};

// WITHDRAW FROM BALANCE
export function withdraw(amount) {
	return {
		type: 'WITHDRAW_TRANSACTION',
		amount
	}
};

// SHOW SPECIFIC TYPE OF MODAL
export function toggleModal(modalType) {
	return {
		type: 'TOGGLE_MODAL',
		modalType
	}
};