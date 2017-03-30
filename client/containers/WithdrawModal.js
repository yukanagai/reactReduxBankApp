import React from 'react';
import ModalTemplate from '../components/ModalTemplate.js';

class WithdrawPage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	onCancelAction() {
		// DISPATCHING TOGGLE MODAL ACTION TO HIDE MODAL
		this.props.toggleModal();
	}

	onWithdrawAction(val) {
		// DISPATCHING WITHDRAW ACTION
		this.props.withdraw(val);
	}

	render() {
		return (
			<ModalTemplate
				headerText='How much would you like to withdraw?' 
				handleLeftButtonAction={this.onCancelAction.bind(this)}
				handleRightButtonAction={this.onWithdrawAction.bind(this)}
				{...this.props}
			/>
		);
	}
}

export default WithdrawPage;