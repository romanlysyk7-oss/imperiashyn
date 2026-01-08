const cargoTypes = [ '3', '4', '5', '6', '9', '10', '11' ];

export function resolveTypeProduct(vehicleType?: string | false) {
	if(!vehicleType) return '';

	return cargoTypes.includes(vehicleType)
		? 'typeproduct=2'
		: '';
}
