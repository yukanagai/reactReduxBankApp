import * as actions from '../actions/actionCreators.js';

describe('actions', () => {

	it('should create an action to deposit a value', () => {
		const amount = 100;
		const expectedAction = {
			type: 'DEPOSIT_TRANSACTION',
			amount
		};
		expect(actions.deposit(amount)).toEqual(expectedAction);
	});


	it('should create an action to withdraw a value', () => {
		const amount = 50;
		const expectedAction = {
			type: 'WITHDRAW_TRANSACTION',
			amount
		};
		expect(actions.withdraw(amount)).toEqual(expectedAction);
	});

	it('should create an action to show a modal', () => {
		const modalType = 'DEPOSIT';
		const expectedAction = {
			type: 'TOGGLE_MODAL',
			modalType
		};
		expect(actions.toggleModal(modalType)).toEqual(expectedAction);
	});


	it('should create an action to hide modal', () => {
		const expectedAction = {
			type: 'TOGGLE_MODAL'
		};
		expect(actions.toggleModal()).toEqual(expectedAction);
	});

});