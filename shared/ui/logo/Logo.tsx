import Image from 'next/image';

const width = 186;
const height = 60;

export function Logo() {
	return (
		<Image
			src="/logo.svg"
			alt="logo"
			width={ width }
			height={ height }
		/>
	);
}
