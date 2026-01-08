'use client';

import { Dispatch, forwardRef, SetStateAction, useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { useTranslations } from 'next-intl';
import { Input } from '@heroui/react';
import { normalizePhone } from '@/shared/lib/phone/normalizePhone';

interface PhoneInputProps {
	error?: string | null;
	onClearError?: Dispatch<SetStateAction<string | null>>;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
	({ error, onClearError }, ref) => {
		const t = useTranslations('phoneMask');
		const [ value, setValue ] = useState<string>('');

		const handleChange = ({ value }: { value: string }) => {
			if(error) onClearError?.(null);
			setValue(normalizePhone(value));
		};

		return (
			<PatternFormat
				customInput={ Input }
				getInputRef={ ref }
				value={ value }
				format="+38 (0##)###-##-##"
				allowEmptyFormatting
				mask="_"
				label={ t('phone number') }
				isRequired
				isInvalid={ Boolean(error && value.length !== 10) }
				errorMessage={ error ? t(error) : undefined }
				onValueChange={ handleChange }
				name="phone"
				radius='sm'
				variant='bordered'
				aria-label="phone-input"
			/>
		);
	}
);

PhoneInput.displayName = 'PhoneInput';
