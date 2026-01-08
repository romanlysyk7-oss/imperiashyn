export function Article({ sku }: { sku: string }) {
	return (
		<div className='text-sm text-gray-500 mb-1'>
			<span>Артикул: </span><span>{ sku }</span>
		</div>
	)
}
