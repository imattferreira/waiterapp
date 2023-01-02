import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  selector: string;
  onePerRoot?: boolean;
  children: ReactNode;
}

function Portal({ selector, children, onePerRoot = false }: PortalProps) {
  let node = document.getElementById(selector);

  if (node && onePerRoot) {
    document.getElementById(selector)?.remove();
  }

  if (!node || onePerRoot) {
    const newNode = document.createElement('div');

    newNode.setAttribute('id', selector);
    document.body.appendChild(newNode);

    node = document.getElementById(selector) as HTMLElement;
  }

  return createPortal(children, node);
}

export default Portal;
