'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { ToastProvider } from '@heroui/toast';
import { AppStore, createStore } from '@/shared/store/createStore';

export default function StoreProvider({ children }: { children: ReactNode }) {
	const storeRef = useRef<AppStore | null>(null);

	if(!storeRef.current) storeRef.current = createStore();

	return (
		<Provider store={ storeRef.current }>
			<ToastProvider placement='top-right' toastProps={{ radius: 'sm', timeout: 4000, classNames: { icon: 'text-gray-500' }}} />
			{ children }
		</Provider>
	);
};
