import { MagnetIcon as MagnetBoldIcon } from "../bold/Magnet";
import { MagnetIcon as MagnetDuotoneIcon } from "../duotone/Magnet";
import { MagnetIcon as MagnetFillIcon } from "../fill/Magnet";
import { MagnetIcon as MagnetLightIcon } from "../light/Magnet";
import { MagnetIcon as MagnetRegularIcon } from "../regular/Magnet";
import { MagnetIcon as MagnetThinIcon } from "../thin/Magnet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MagnetThinIcon,
	light: MagnetLightIcon,
	regular: MagnetRegularIcon,
	bold: MagnetBoldIcon,
	fill: MagnetFillIcon,
	duotone: MagnetDuotoneIcon,
} as const;

export function MagnetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MagnetIcon as Magnet };
