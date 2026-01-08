import { ConfigSettingsApi, LangConfigApi } from '@/entities/settings/api/types';
import { ConfigSettings, LangConfig, Phone } from '@/shared/types/settings';

export function mapSettings(api: ConfigSettingsApi): ConfigSettings {
	return {
		head: {
			headHtml: api["0"].head_html,
			bodyHtml: api["0"].body_html,
			gtm: api["0"].google_tag_manager ?? undefined,
		},
		locales: {
			ua: mapLang(api.ua),
			ru: mapLang(api.ru),
		},
	};
}

function isPhone(value: Phone | null): value is Phone {
	return value !== null;
}

function mapLang(api: LangConfigApi): LangConfig {
	const phones = [
		buildPhone('vodafone', api.config_telephone_vodafone, api.config_telephone_vodafone_url, api.config_telephone_vodafone_name),
		buildPhone('vodafone', api.config_telephone_vodafone2, api.config_telephone_vodafone2_url, api.config_telephone_vodafone2_name),
		buildPhone('kievstar', api.config_telephone_kievstar, api.config_telephone_kievstar_url, api.config_telephone_kievstar_name),
		buildPhone('kievstar', api.config_telephone_kievstar2, api.config_telephone_kievstar2_url, api.config_telephone_kievstar2_name),
		buildPhone('life', api.config_telephone_life, api.config_telephone_life_url, api.config_telephone_life_name),
		buildPhone('life', api.config_telephone_life2, api.config_telephone_life2_url, api.config_telephone_life2_name),
	].filter(isPhone);

	return {
		name: api.config_name,
		email: api.config_email ?? undefined,
		description: api.description,
		owner: api.config_owner,
		address: api.config_address,
		open: api.config_open,
		meta: {
			title: api.meta_title,
			description: api.meta_description,
		},
		phones,
		blocks: {
			h2Top: api.h2_top ?? undefined,
			h2PopularTyre: api.h2_popular_tyre ?? undefined,
			h2PopularAuto: api.h2_popular_auto ?? undefined,
		},
		kredit: api.kredit ?? undefined,
	};
}

function buildPhone(
	operator: Phone['operator'],
	phone: string | null,
	url?: string | null,
	name?: string | null
): Phone | null {
	if (!phone) return null;
	return {
		operator,
		phone,
		url: url ?? undefined,
		name: name ?? undefined,
	};
}