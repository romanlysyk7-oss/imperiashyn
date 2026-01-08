const POSTPAID = {
	fixed: 20,
	coef: 1.02,
};

export function calculatePostpaid(
	productPrice: number,
	quantity: number,
	deliveryCost: number
): number {
	const total = productPrice * quantity;
	return total * POSTPAID.coef + POSTPAID.fixed + deliveryCost;
}

export function formatPrice(value: number): string {
	return Number.isInteger(value)
		? value.toFixed(0)
		: value.toFixed(2);
}
