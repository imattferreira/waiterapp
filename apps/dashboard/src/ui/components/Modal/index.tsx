import { ReactNode, useState } from "react";
import Icon from "../Icon";
import Portal from "../Portal";
import { closeButton, container, modal, overlay, header } from "./styles.css";

const PORTAL_SELECTOR = 'modal-root';

type ModalProps = {
  title: string;
  children: ReactNode;
  open?: boolean;
}

function Modal({ title, children, open = false }: ModalProps) {
  const [isOpen, setOpen] = useState(open);

  function onClose() {
    setOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <Portal selector={PORTAL_SELECTOR} onePerRoot>
      <div className={overlay} />
      <div className={container}>
      <div className={modal}>
        <header className={header}>
          <h2>{title}</h2>
          <button className={closeButton} onClick={onClose}>
            <Icon name="close" />
          </button>
        </header>
        <main>
          {children}
        </main>
      </div>
      </div>
    </Portal>
  )
}

export default Modal;
