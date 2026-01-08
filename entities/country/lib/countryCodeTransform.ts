import { countryCode } from '../model/countryCode';

export const countryCodeTransform = (country: string) => {
	for (const code in countryCode) {
		if(countryCode[code] === country) {
			return code;
		}
	}
	return null;
};
