import * as React from 'react';

export interface AnchorProps {
  children: React.ReactNode;
  openInNewWindow?: boolean;
}

export function Anchor(props: AnchorProps) {
  return (
    <a href="#" {...(props.openInNewWindow && { target: '_blank' })}>
      {props.children}
    </a>
  );
}

Anchor.displayName = 'Anchor';
