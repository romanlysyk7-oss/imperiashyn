import { countryCodeTransform } from './countryCodeTransform';

export function getCountryCode(country?: string) {
	return country ? countryCodeTransform(country) : undefined;
}
