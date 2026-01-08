import { FilterAltProps } from '../model/types';
import { FilterContent } from './FilterContent';

export function FilterAltDesktop(props: FilterAltProps) {
	return <FilterContent { ...props } />;
}
