interface Props {
	label: string;
	value: string;
}

export const CharacteristicsItem = ({ label, value }: Props) => (
	<>
		<div className='h-11 leading-11 bg-[#D0D4D9] text-black'>
			{ label }
		</div>
		<div className='h-11 leading-11'>
			{ value }
		</div>
	</>
);
