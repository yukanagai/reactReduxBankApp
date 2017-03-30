import React from 'react';
import ModalTemplate from '../components/ModalTemplate.js';

class DepositModal extends React.Component {
	constructor(props) {
		super(props);
	}

	onCancelAction() {
		// CALLING TOGGLE MODAL ACTION TO HIDE MODAL
		this.props.toggleModal();
	}

	onDepositAction(val) {
		// CALLING DEPOSIT ACTION
		this.props.deposit(val);
	}
	
	render() {
		return (
			<ModalTemplate
				headerText='How much would you like to deposit?' 
				handleLeftButtonAction={this.onCancelAction.bind(this)}
				handleRightButtonAction={this.onDepositAction.bind(this)}
				{...this.props}
			/>
		);
	}
}

export default DepositModal;