import { ChangeEvent, FormEvent, ReactNode } from 'react';
import { Input } from '@heroui/react';
import { useSearchPlaceholder } from '@/features/search/model/useSearchPlaceholder';

interface Props {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	endContent?: ReactNode;
}

export function SearchInput({ value, onChange, onSubmit, endContent, }: Props) {
	const placeholder = useSearchPlaceholder();

	return (
		<form className="w-full" onSubmit={ onSubmit }>
			<Input
				value={ value }
				placeholder={ placeholder }
				onChange={ onChange }
				type="search"
				size="sm"
				radius="sm"
				variant="bordered"
				classNames={ {
					base: 'max-w-full h-11',
					mainWrapper: 'h-full',
					input: 'text-md',
					inputWrapper:
						'h-full font-normal text-default-500 w-full pl-4 pr-0',
				} }
				endContent={ endContent }
			/>
		</form>
	);
}
