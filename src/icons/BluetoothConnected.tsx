import { BluetoothConnectedIcon as BluetoothConnectedBoldIcon } from "../bold/BluetoothConnected";
import { BluetoothConnectedIcon as BluetoothConnectedDuotoneIcon } from "../duotone/BluetoothConnected";
import { BluetoothConnectedIcon as BluetoothConnectedFillIcon } from "../fill/BluetoothConnected";
import { BluetoothConnectedIcon as BluetoothConnectedLightIcon } from "../light/BluetoothConnected";
import { BluetoothConnectedIcon as BluetoothConnectedRegularIcon } from "../regular/BluetoothConnected";
import { BluetoothConnectedIcon as BluetoothConnectedThinIcon } from "../thin/BluetoothConnected";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BluetoothConnectedThinIcon,
	light: BluetoothConnectedLightIcon,
	regular: BluetoothConnectedRegularIcon,
	bold: BluetoothConnectedBoldIcon,
	fill: BluetoothConnectedFillIcon,
	duotone: BluetoothConnectedDuotoneIcon,
} as const;

export function BluetoothConnectedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BluetoothConnectedIcon as BluetoothConnected };
