import { BluetoothXIcon as BluetoothXBoldIcon } from "../bold/BluetoothX";
import { BluetoothXIcon as BluetoothXDuotoneIcon } from "../duotone/BluetoothX";
import { BluetoothXIcon as BluetoothXFillIcon } from "../fill/BluetoothX";
import { BluetoothXIcon as BluetoothXLightIcon } from "../light/BluetoothX";
import { BluetoothXIcon as BluetoothXRegularIcon } from "../regular/BluetoothX";
import { BluetoothXIcon as BluetoothXThinIcon } from "../thin/BluetoothX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BluetoothXThinIcon,
	light: BluetoothXLightIcon,
	regular: BluetoothXRegularIcon,
	bold: BluetoothXBoldIcon,
	fill: BluetoothXFillIcon,
	duotone: BluetoothXDuotoneIcon,
} as const;

export function BluetoothXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BluetoothXIcon as BluetoothX };
