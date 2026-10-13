import { forwardRef, useImperativeHandle, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

// This type is used with `forwardRef` to ensure that the `Modal` component can be used with `useImperativeHandle` to expose a `open` method
export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void; // The onClose function prop is used to propagate the default "close" event that can be triggered by <dialog> (for example, when the ESC key is pressed)
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal (
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);
  //react-router-dom.js?v=dd52efa4:4128 Error handled by React Router default ErrorBoundary: Error: Target container is not a DOM element.
//    at Modal (Modal.tsx:32:10)

  // useImperativeHandle is used to expose the `open` method to other components
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal(); // showModal() is a built-in method available on the <dialog> element
        }
      },
    };
  });

  // Below, the onClose prop is set on <dialog> to handle the case that the user closes the modal via a built-in mechanism (ESC key)
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    modalRoot
  );
});

export default Modal;
