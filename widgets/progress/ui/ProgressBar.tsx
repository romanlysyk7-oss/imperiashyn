"use client";

import { Progress as ProgressUI } from "@heroui/progress";
import { useAppSelector } from "@/shared/hooks/redux";

export function ProgressBar() {
	const progress = useAppSelector(
		(state) => state.progressReducer.progress,
	);

	if(!progress) return null;

	return (
		<div className="fixed top-0 left-0 w-full z-50">
			<ProgressUI
				color="primary"
				isIndeterminate
				aria-label="Loading..."
				size='sm'
			/>
		</div>
	);
}
