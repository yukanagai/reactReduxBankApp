import React from 'react';
import renderer from 'react-test-renderer';
import DepositModal from '../containers/DepositModal.js';

// Snapshot for DEPOSIT MODAL React Component
test('DEPOSIT MODAL --- Snapshot',()=>{
    const tree = renderer.create(
    	<DepositModal headerText='Test Deposit Modal' />
    ).toJSON();
   	expect(tree).toMatchSnapshot();
});