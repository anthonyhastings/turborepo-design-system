import * as React from 'react';

export interface AnchorProps {
  children: React.ReactNode;
}

export function Anchor(props: AnchorProps) {
  return <a>{props.children}</a>;
}

Anchor.displayName = 'Anchor';
