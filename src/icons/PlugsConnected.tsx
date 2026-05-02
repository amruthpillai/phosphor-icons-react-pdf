import { PlugsConnectedIcon as PlugsConnectedBoldIcon } from "../bold/PlugsConnected";
import { PlugsConnectedIcon as PlugsConnectedDuotoneIcon } from "../duotone/PlugsConnected";
import { PlugsConnectedIcon as PlugsConnectedFillIcon } from "../fill/PlugsConnected";
import { PlugsConnectedIcon as PlugsConnectedLightIcon } from "../light/PlugsConnected";
import { PlugsConnectedIcon as PlugsConnectedRegularIcon } from "../regular/PlugsConnected";
import { PlugsConnectedIcon as PlugsConnectedThinIcon } from "../thin/PlugsConnected";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlugsConnectedThinIcon,
	light: PlugsConnectedLightIcon,
	regular: PlugsConnectedRegularIcon,
	bold: PlugsConnectedBoldIcon,
	fill: PlugsConnectedFillIcon,
	duotone: PlugsConnectedDuotoneIcon,
} as const;

export function PlugsConnectedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlugsConnectedIcon as PlugsConnected };
