import React from 'react';
import { Heading } from './Heading';

it('renders with supplied children', () => {
  cy.mount(<Heading>Why change?</Heading>);
  cy.findByRole('heading', { name: /why change\?/i }).should('be.visible');
});
