'use client';

import { Button } from '@/shared/ui/button';
import * as Icons from '@/shared/ui/icons';
import { Link } from '@/shared/i18n/navigation';
import { SearchInput } from '@/shared/ui/search-input';

import { useSearch } from '../model/useSearch';
import { SearchResults } from './SearchResults';

export function SearchForm() {
	const {
		value,
		products,
		totalCount,
		isOpen,
		dropdownRef,
		onChange,
		onSubmit,
		onResults,
		searchHref,
	} = useSearch();

	return (
		<>
			<SearchInput
				value={ value }
				onChange={ onChange }
				onSubmit={ onSubmit }
				endContent={
					<Button
						as={ Link }
						href={ searchHref }
						color='primary'
						type="submit"
						isIconOnly
						aria-label="Search"
						radius="sm"
						className="w-16 h-11 -mr-1"
					>
						<Icons.SearchIcon className="text-white"/>
					</Button>
				}
			/>

			<SearchResults
				products={ products }
				totalCount={ totalCount }
				isOpen={ isOpen }
				onResults={ onResults }
				dropdownRef={ dropdownRef }
				href={ searchHref }
			/>
		</>
	);
}
