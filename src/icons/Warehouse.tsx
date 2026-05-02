import { WarehouseIcon as WarehouseBoldIcon } from "../bold/Warehouse";
import { WarehouseIcon as WarehouseDuotoneIcon } from "../duotone/Warehouse";
import { WarehouseIcon as WarehouseFillIcon } from "../fill/Warehouse";
import { WarehouseIcon as WarehouseLightIcon } from "../light/Warehouse";
import { WarehouseIcon as WarehouseRegularIcon } from "../regular/Warehouse";
import { WarehouseIcon as WarehouseThinIcon } from "../thin/Warehouse";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WarehouseThinIcon,
	light: WarehouseLightIcon,
	regular: WarehouseRegularIcon,
	bold: WarehouseBoldIcon,
	fill: WarehouseFillIcon,
	duotone: WarehouseDuotoneIcon,
} as const;

export function WarehouseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WarehouseIcon as Warehouse };
