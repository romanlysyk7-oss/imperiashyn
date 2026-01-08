import { AppDispatch } from '@/shared/store/createStore';
import { getFromStorage } from '@/shared/lib/locale-storage/localeStorage';
import { addBookmarksFromStorage } from '@/features/bookmarks/toggle/lib/storage';

export function initBookmarks(dispatch: AppDispatch) {
	const data = getFromStorage('reducerBookmarks') || [];
	if(data.length) {
		dispatch(addBookmarksFromStorage(data));
	}
}
