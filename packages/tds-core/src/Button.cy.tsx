import React from 'react';
import { Button } from './Button';

it('renders with supplied children', () => {
  cy.mount(<Button>Find out more</Button>);
  cy.findByRole('button', { name: /find out more/i }).should('be.visible');
});
