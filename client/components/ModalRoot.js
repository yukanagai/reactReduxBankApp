import React from 'react';
import DepositModal from '../containers/DepositModal';
import WithdrawModal from '../containers/WithdrawModal';

// DECIDES WHICH MODAL TO RETURN BASED ON STATE/STORE

const MODAL_COMPONENTS = {
  'DEPOSIT': DepositModal,
  'WITHDRAW': WithdrawModal
};

const ModalRoot = (props) => {

	console.log('props.modalType.modalType', props)

	const SpecificModal = MODAL_COMPONENTS[props.params.modalType];

	return (
		<SpecificModal {...props}/>
	);
}

export default ModalRoot;