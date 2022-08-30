import * as React from 'react';

export interface AnchorProps {
  children: React.ReactNode;
}

export function Anchor(props: AnchorProps) {
  return <a href="#">{props.children}</a>;
}

Anchor.displayName = 'Anchor';
