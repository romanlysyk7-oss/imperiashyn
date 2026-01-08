import { KitDiskSize, KitTyreSize } from '@/features/catalog-filter-by-car/model/types';

export function CarBrand({ data }: { data: KitTyreSize | KitDiskSize }) {
	return (
		<>
			<div className='text-gray-500 dark:text-[#949699]'>Ваш авто:</div>
			<div className='font-bold mt-2'>
				{ `${ data.kits.car2_model.car2_brand.name } ${ data.kits.car2_model.name } ${ data.kits.name } (${ data.kits.year })` }
			</div>
		</>
	)
}
