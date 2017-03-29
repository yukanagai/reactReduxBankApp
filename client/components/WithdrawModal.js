import React from 'react';
import ModalTemplate from './ModalTemplate.js';

class WithdrawPage extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(val) {
		if (val) {
			this.props.withdraw(val);
		}
	}

	handleCancel() {
		this.props.hideModal();
	}

	render() {
		return (
			<ModalTemplate
				headerText='How much would you like to withdraw?' 
				handleLeftButtonAction={this.handleCancel.bind(this)}
				handleRightButtonAction={this.handleSubmit.bind(this)}
				{...this.props} />
		);
	}

}

export default WithdrawPage;