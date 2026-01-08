import { useEffect, useRef, useState } from 'react';

const PLACEHOLDER_EXAMPLES = [
	'235/45 R18 RunFlat',
	'Bridgestone 205 55 16',
	'зима 185 65 14',
	'Nexen r15 91H',
	'R22 RunFlat',
	'Nokian R17',
	'Michelin 225 R17',
	'Premiorri Solazo',
	'245 R18 FR',
];

export function useSearchPlaceholder() {
	const [ placeholder, setPlaceholder ] = useState('');
	const [ index, setIndex ] = useState(0);
	const letterIndex = useRef(0);

	useEffect(() => {
		const current = PLACEHOLDER_EXAMPLES[index];

		const type = () => {
			if(letterIndex.current <= current.length) {
				setPlaceholder(current.slice(0, letterIndex.current));
				letterIndex.current += 1;
				setTimeout(type, 75);
			} else {
				setTimeout(() => {
					letterIndex.current = 0;
					setIndex((i) => (i + 1) % PLACEHOLDER_EXAMPLES.length);
				}, 2000);
			}
		};

		type();
	}, [ index ]);

	return placeholder;
}
