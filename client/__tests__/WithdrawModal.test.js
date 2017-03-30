import React from 'react';
import renderer from 'react-test-renderer';
import WithdrawModal from '../containers/WithdrawModal.js';

// Snapshot for WithdrawModal React Component
test('WITHDRAW MODAL --- Snapshot',()=>{
    const tree = renderer.create(
    	<WithdrawModal headerText='Header text test' />
    ).toJSON();
   	expect(tree).toMatchSnapshot();
});