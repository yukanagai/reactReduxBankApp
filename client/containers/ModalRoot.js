import React from 'react';
import DepositModal from '../components/DepositModal';
import WithdrawModal from '../components/WithdrawModal';

const MODAL_COMPONENTS = {
  'DEPOSIT': DepositModal,
  'WITHDRAW': WithdrawModal
}

class ModalRoot extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.modalType) {
			return <span />;
		}

		const SpecificModal = MODAL_COMPONENTS[this.props.modalType];

  	return (
 			<SpecificModal {...this.props}/>
 		);
	}
}

export default ModalRoot;