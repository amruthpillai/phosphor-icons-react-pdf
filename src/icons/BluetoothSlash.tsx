import { BluetoothSlashIcon as BluetoothSlashBoldIcon } from "../bold/BluetoothSlash";
import { BluetoothSlashIcon as BluetoothSlashDuotoneIcon } from "../duotone/BluetoothSlash";
import { BluetoothSlashIcon as BluetoothSlashFillIcon } from "../fill/BluetoothSlash";
import { BluetoothSlashIcon as BluetoothSlashLightIcon } from "../light/BluetoothSlash";
import { BluetoothSlashIcon as BluetoothSlashRegularIcon } from "../regular/BluetoothSlash";
import { BluetoothSlashIcon as BluetoothSlashThinIcon } from "../thin/BluetoothSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BluetoothSlashThinIcon,
	light: BluetoothSlashLightIcon,
	regular: BluetoothSlashRegularIcon,
	bold: BluetoothSlashBoldIcon,
	fill: BluetoothSlashFillIcon,
	duotone: BluetoothSlashDuotoneIcon,
} as const;

export function BluetoothSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BluetoothSlashIcon as BluetoothSlash };
