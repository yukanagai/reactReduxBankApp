import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Container from './Container';
import '../../semantic/dist/semantic.min.scss';

const mapStateToProps = (state) => {
	return {
		modalType: state.modalType,
		balance: state.balance
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);