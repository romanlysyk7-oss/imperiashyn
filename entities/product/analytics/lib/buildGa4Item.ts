import { Section } from '@/shared/types/section';

const sectionMap: Record<Section, string> = {
	tires: 'Автошини',
	disks: 'Автодиски',
	battery: 'Акумулятори',
	cargo: 'Вантажні',
	car: 'Авто',
	special: 'Спецшини',
	moto: 'Мотошини'
};

export const buildGa4Item = (
	{ id, name, brand, price, section, model, variant, quantity = 1 }:
	{ id: number | string; name?: string; brand?: string; price?: number; section?: Section; model?: string; variant?: string; quantity?: number }
) => ({
	item_id: id,
	item_name: name,
	item_brand: brand,
	item_category: 'Автотовари',
	item_category2: section ? sectionMap[section] : undefined,
	item_category3: model,
	item_variant: variant,
	price,
	quantity,
});
