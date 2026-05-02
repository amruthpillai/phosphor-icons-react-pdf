import { BluetoothIcon as BluetoothBoldIcon } from "../bold/Bluetooth";
import { BluetoothIcon as BluetoothDuotoneIcon } from "../duotone/Bluetooth";
import { BluetoothIcon as BluetoothFillIcon } from "../fill/Bluetooth";
import { BluetoothIcon as BluetoothLightIcon } from "../light/Bluetooth";
import { BluetoothIcon as BluetoothRegularIcon } from "../regular/Bluetooth";
import { BluetoothIcon as BluetoothThinIcon } from "../thin/Bluetooth";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BluetoothThinIcon,
	light: BluetoothLightIcon,
	regular: BluetoothRegularIcon,
	bold: BluetoothBoldIcon,
	fill: BluetoothFillIcon,
	duotone: BluetoothDuotoneIcon,
} as const;

export function BluetoothIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BluetoothIcon as Bluetooth };
