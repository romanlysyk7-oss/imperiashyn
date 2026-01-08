import { AppDispatch } from '@/shared/store/createStore';
import { getFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { addComparisonFromStorage } from '@/features/comparison/toggle/lib/storage';

export function initComparison(dispatch: AppDispatch) {
	const data = getFromStorage('reducerComparison') || [];
	if(data.length) {
		dispatch(addComparisonFromStorage(data));
	}
}
