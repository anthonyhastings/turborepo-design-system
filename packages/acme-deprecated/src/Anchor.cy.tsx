import React from 'react';
import { Anchor } from './Anchor';

it('renders with supplied children', () => {
  cy.mount(<Anchor>Find out more</Anchor>);
  cy.findByRole('link', { name: /find out more/i }).should('be.visible');
});
