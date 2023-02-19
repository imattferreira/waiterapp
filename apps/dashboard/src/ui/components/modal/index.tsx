import { ReactNode } from "react";

import Icon from "@/ui/components/icon";
import Portal from "@/ui/components/portal";

import { closeButton, container, modal, overlay, header } from "./styles.css";

const PORTAL_SELECTOR = "modal-root";

type ModalProps = {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
};

function Modal({ title, children, isOpen = false, onClose }: ModalProps) {
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
          <main>{children}</main>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
