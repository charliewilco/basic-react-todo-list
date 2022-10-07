import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TodoContext } from "./context";

interface ModalButtonProps
	extends Exclude<
		React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		"className"
	> {}

export function ModalButton(props: ModalButtonProps) {
	return (
		<button
			type="button"
			className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
			{...props}></button>
	);
}

interface ModalProps {
	children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
	const [{ isModalOpen }, { onDismissModal }] = useContext(TodoContext);
	return (
		<Transition appear show={isModalOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={onDismissModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-end lg:items-center justify-center text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-2xl lg:rounded-2xl  bg-white dark:bg-zinc-900 text-left align-bottom shadow-xl transition-all">
								<div>{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
