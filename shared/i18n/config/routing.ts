import { defineRouting } from "next-intl/routing";
import { Locale } from "@/shared/types/locale";

export const routing = defineRouting({
	locales: [ Locale.UK, Locale.RU ],
	defaultLocale: Locale.UK,
	localeDetection: false,
});
