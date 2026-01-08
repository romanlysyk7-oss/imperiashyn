export interface LangConfigApi {
	config_name: string;
	config_email?: string | null;
	description: string;
	config_owner: string;

	config_telephone_besk_url: string;
	config_telephone_besk: string | null;

	config_telephone_vodafone_url: string;
	config_telephone_vodafone: string | null;

	config_telephone_kievstar_url: string;
	config_telephone_kievstar: string | null;

	config_telephone_life_url: string;
	config_telephone_life: string | null;

	config_address: string;
	config_open: string;
	config_telephones: string | null;

	meta_title: string;
	meta_description: string;

	config_punct: string;

	shablon_title: string;
	shablon_description: string;

	config_telephone_vodafone_name: string | null;
	config_telephone_kievstar_name: string | null;
	config_telephone_life_name: string | null;

	config_telephone_vodafone2_url: string | null;
	config_telephone_vodafone2: string | null;
	config_telephone_vodafone2_name: string | null;

	config_telephone_kievstar2_url: string | null;
	config_telephone_kievstar2: string | null;
	config_telephone_kievstar2_name: string | null;

	config_telephone_life2_url: string | null;
	config_telephone_life2: string | null;
	config_telephone_life2_name: string | null;

	h2_top: string | null;
	h2_popular_tyre: string | null;
	h2_popular_auto: string | null;

	kredit: string | null;
}

export interface HeadConfigApi {
	head_html: string;
	body_html: string;
	google_tag_manager: string | null;
}

export interface ConfigSettingsApi {
	"0": HeadConfigApi;
	ua: LangConfigApi;
	ru: LangConfigApi;
}
