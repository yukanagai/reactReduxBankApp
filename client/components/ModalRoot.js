import React, { PropTypes } from 'react';
import DepositModal from '../containers/DepositModal';
import WithdrawModal from '../containers/WithdrawModal';

// DECIDES WHICH MODAL TO RETURN BASED ON STATE/STORE

const MODAL_COMPONENTS = {
  'DEPOSIT': DepositModal,
  'WITHDRAW': WithdrawModal
};

const ModalRoot = (props) => {

	const SpecificModal = MODAL_COMPONENTS[props.params.modalType];

	return (
		<SpecificModal {...props}/>
	);
};


ModalRoot.propTypes = {
  modalType: PropTypes.object
};

export default ModalRoot;