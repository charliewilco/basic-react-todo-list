import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "./context";

interface ModalProps {
	children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
	const [{ isModalOpen }, { onDismissModal }] = useContext(TodoContext);
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const returnFocusRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const dialog = dialogRef.current;

		if (!dialog) {
			return;
		}

		if (isModalOpen) {
			returnFocusRef.current =
				document.activeElement instanceof HTMLElement ? document.activeElement : null;

			if (!dialog.open) {
				if (typeof dialog.showModal === "function") {
					dialog.showModal();
				} else {
					dialog.setAttribute("open", "");
				}
			}

			return;
		}

		if (dialog.open) {
			if (typeof dialog.close === "function") {
				dialog.close();
			} else {
				dialog.removeAttribute("open");
			}
		}
	}, [isModalOpen]);

	useEffect(() => {
		if (isModalOpen) {
			return;
		}

		returnFocusRef.current?.focus();
	}, [isModalOpen]);

	const handleCancel = (event: React.SyntheticEvent<HTMLDialogElement, Event>) => {
		event.preventDefault();
		onDismissModal();
	};

	const handleClose = () => {
		if (isModalOpen) {
			onDismissModal();
		}
	};

	const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
		if (event.target === event.currentTarget) {
			onDismissModal();
		}
	};

	return (
		<dialog
			ref={dialogRef}
			className="modal-dialog"
			aria-labelledby="todo-form-title"
			onCancel={handleCancel}
			onClose={handleClose}
			onClick={handleBackdropClick}>
			<div className="modal-panel">{children}</div>
		</dialog>
	);
}
