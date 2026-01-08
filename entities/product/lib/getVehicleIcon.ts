import type { ComponentType } from 'react';
import * as UiIcons from '@/shared/ui/icons';
import type { VehicleType } from '../../products/model';

const vehicleTypeToIcon: Record<VehicleType, ComponentType<any>> = {
	'1': UiIcons.CarIcon,
	'2': UiIcons.SuvIcon,
	'3': UiIcons.CargoIcon,
	'7': UiIcons.MotorcyclesIcon,
	'8': UiIcons.BusIcon,
	'9': UiIcons.SpecialEquipmentIcon,
};

export function getVehicleIcon(type: VehicleType) {
	return vehicleTypeToIcon[type] ?? null;
}
