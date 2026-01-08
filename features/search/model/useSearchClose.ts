import { RefObject, useEffect } from 'react';
import { useClickOutside } from '@/shared/lib/dom/useClickOutside';

interface Params {
	isOpen: boolean;
	dropdownRef: RefObject<HTMLDivElement | null>;
	onClose: () => void;
}

export function useSearchClose({
																 isOpen,
																 dropdownRef,
																 onClose,
															 }: Params) {
	useClickOutside(dropdownRef, () => {
		if (isOpen) {
			onClose();
		}
	});

	useEffect(() => {
		if (!isOpen) return;

		const onEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', onEsc);
		return () => document.removeEventListener('keydown', onEsc);
	}, [isOpen, onClose]);
}
