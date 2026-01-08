export const cargoTypes = [ '3', '4', '5', '6' ];
export const industrialTypes = [ '9', '10', '11' ];

export const isCargo = (vehicleType?: string | null) =>
	!!vehicleType && cargoTypes.includes(vehicleType);

export const isIndustrial = (vehicleType?: string | null) =>
	!!vehicleType && industrialTypes.includes(vehicleType);
