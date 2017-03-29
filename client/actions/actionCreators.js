// DEPOSIT FROM BALANCE
export function deposit(amount) {
	return {
		type: 'DEPOSIT_BALANCE',
		amount
	}
};

// WITHDRAW FROM BALANCE
export function withdraw(amount) {
	return {
		type: 'WITHDRAW_BALANCE',
		amount
	}
};

// SHOW SPECIFIC TYPE OF MODAL
export function showModal(modalType) {
	return {
		type: 'SHOW_MODAL',
		modalType
	}
};


// HIDE ALL MODALS
export function hideModal() {
	return {
		type: 'HIDE_MODAL'
	}
}