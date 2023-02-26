import React from 'react';
import { Button } from './Button.js';

it('renders with supplied children', () => {
  const onClickStub = cy.stub().as('onClickStub');

  cy.mount(<Button onClick={onClickStub}>Find out more</Button>);

  cy.findByRole('button', { name: /find out more/i })
    .should('be.visible')
    .trigger('click');

  cy.get('@onClickStub').should('be.calledOnce');
});
