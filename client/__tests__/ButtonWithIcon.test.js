import React from 'react';
import renderer from 'react-test-renderer';
import ButtonWithIcon from '../components/ButtonWithIcon.js';

// Snapshot for WithdrawModal React Component
test('BUTTON WITH ICON --- Snapshot',()=>{
    const tree = renderer.create(
    	<ButtonWithIcon	
    		text='sample btn text'
    		iconClass='minus icon'/>
    ).toJSON();
   	expect(tree).toMatchSnapshot();
});