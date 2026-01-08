'use client';

import { useTranslations } from 'next-intl';
import { Tab, Tabs } from '@heroui/tabs';

import { Section } from '@/shared/types/section';
import { ComparisonProductCard } from '@/entities/product/ui/ComparisonProductCard';
import type { ProductApi } from '@/entities/products/api/types';
import { Button } from '@/shared/ui/button';
import { useAppDispatch } from '@/shared/hooks/redux';
import { removeComparison, reset } from '@/features/comparison/toggle/lib/storage';
import { removeFromStorage, resetStorage } from '@/shared/lib/locale-storage/localeStorage';
import { useRouter } from '@/shared/i18n/navigation';

interface Props {
	tires: ProductApi[];
	cargo: ProductApi[];
	disks: ProductApi[];
	battery: ProductApi[];
}

export function ComparisonTabs({ tires, cargo, disks, battery }: Props) {
	const t = useTranslations('filters');
	const dispatch = useAppDispatch();
	const rout = useRouter();

	const resetEverything = () => {
		dispatch(reset());
		resetStorage('reducerComparison');
		rout.push('/');
	}

	const handleClick = (id: number) => {
		removeFromStorage('reducerComparison', id)
		dispatch(removeComparison(id));
	}

	return (
		<Tabs variant="underlined" size="lg">
			{ tires.length > 0 && (
				<Tab
					key={ (Section.Tires) }
					title={ `${ t(Section.Tires) } (${ tires.length })` }
				>
					<>
						<div className='relative pt-6 md:pt-2 pb-2 mb-2 text-sm'>
							<Button
								size='sm'
								color='default'
								variant='light'
								className='font-bold'
								onPress={ resetEverything }
								endContent={ <span>X</span> }
							>
								{ t('reset everything') }
							</Button>
						</div>
						<div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full">
							{ tires.map(p => (
								<ComparisonProductCard key={ p.group } product={ p } handleClick={ handleClick } type='tires' section={ Section.Tires } />
							)) }
						</div>
					</>
				</Tab>
			) }

			{ cargo.length > 0 && (
				<Tab key={ Section.Cargo } title={ `${ t(Section.Cargo) } (${ cargo.length })` }>
					<>
						<div className='relative pt-6 md:pt-2 pb-2 mb-2 text-sm'>
							<Button
								size='sm'
								color='default'
								variant='light'
								className='font-bold'
								onPress={ resetEverything }
								endContent={ <span>X</span> }
							>
								{ t('reset everything') }
							</Button>
						</div>
						<div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full">
							{ cargo.map(p => (
								<ComparisonProductCard key={ p.group } product={ p } handleClick={ handleClick } type='cargo' section={ Section.Cargo } />
							)) }
						</div>
					</>
				</Tab>
			) }

			{ disks.length > 0 && (
				<Tab key={ Section.Disks } title={ `${ t(Section.Disks) } (${ disks.length })` }>
					<>
						<div className='relative pt-6 md:pt-2 pb-2 mb-2 text-sm'>
							<Button
								size='sm'
								color='default'
								variant='light'
								className='font-bold'
								onPress={ resetEverything }
								endContent={ <span>X</span> }
							>
								{ t('reset everything') }
							</Button>
						</div>
						<div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full">
							{ disks.map(p => (
								<ComparisonProductCard key={ p.group } product={ p } handleClick={ handleClick } type='disks' section={ Section.Disks } />
							)) }
						</div>
					</>
				</Tab>
			) }

			{ battery.length > 0 && (
				<Tab key={ Section.Battery } title={ `${ t(Section.Battery) } (${ battery.length })` }>
					<>
						<div className='relative pt-6 md:pt-2 pb-2 mb-2 text-sm'>
							<Button
								size='sm'
								color='default'
								variant='light'
								className='font-bold'
								onPress={ resetEverything }
								endContent={ <span>X</span> }
							>
								{ t('reset everything') }
							</Button>
						</div>
						<div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full">
							{ battery.map(p => (
								<ComparisonProductCard key={ p.group } product={ p } handleClick={ handleClick } type='battery' section={ Section.Battery } />
							)) }
						</div>
					</>
				</Tab>
			) }
		</Tabs>
	);
}
