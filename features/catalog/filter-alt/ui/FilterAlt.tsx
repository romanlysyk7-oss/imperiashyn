import { FilterAltProps } from '../model/types';
import { FilterAltMobile } from './FilterAltMobile';
import { FilterAltDesktop } from './FilterAltDesktop';

export function FilterAlt(props: FilterAltProps) {
	return (
		<>
			<div className="hidden lg:block">
				<FilterAltDesktop { ...props } />
			</div>

			<div className="lg:hidden">
				<FilterAltMobile
					{ ...props }
				/>
			</div>
		</>
	);
}
