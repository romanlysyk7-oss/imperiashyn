'use client';

import { useEffect } from 'react';

import { useAppDispatch } from '@/shared/hooks/redux';
import { hideProgress } from '@/features/progress/model/progress.slice';

export function ResetProgress() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(hideProgress());
	}, [dispatch]);

	return null;
}
