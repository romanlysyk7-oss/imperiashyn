export function buildTyreParams(size: { width: number; height: number; diameter: number }) {
	return `/w-${ size.width }/h-${ size.height }/d-${ size.diameter }`;
}

export function buildDiskParams(size: { width: number; diameter: number, et: number, kits: { bolt_count: number; pcd: number; dia: number; } }) {
	return `/w-${ size.width }/d-${ size.diameter }/kr-${ size.kits.bolt_count }x${ size.kits.pcd }/et-${ size.et }/dia-${ size.kits.dia }`;
}
