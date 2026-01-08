import { Locale } from '@/shared/types/locale';
import { getSettings } from '@/entities/settings/api/settings.api';

export async function getSeo(locale: Locale) {
	const settings = await getSettings();

	return {
		title: `${ locale === Locale.UK ? 'Шинний калькулятор' : 'Шинний калькулятор' } - ${ settings.ua.config_owner }`,
		description:
			locale === Locale.UK ?
				'Візуальний шинний калькулятор допоможе визначити параметри взаємозамінності шин, а також вибрати альтернативні розміри шин для Вашого авто. Зручний калькулятор розміру гуми та дисків на авто.'
				: 'Визуальный шинный калькулятор поможет определить параметры взаимозаменяемости шин, а также выбрать альтернативные варианты шин для вашего автомобиля. Ручной калькулятор разметки губ и дисков на авто.',
	};
}