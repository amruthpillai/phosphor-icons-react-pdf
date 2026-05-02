import { VirtualRealityIcon as VirtualRealityBoldIcon } from "../bold/VirtualReality";
import { VirtualRealityIcon as VirtualRealityDuotoneIcon } from "../duotone/VirtualReality";
import { VirtualRealityIcon as VirtualRealityFillIcon } from "../fill/VirtualReality";
import { VirtualRealityIcon as VirtualRealityLightIcon } from "../light/VirtualReality";
import { VirtualRealityIcon as VirtualRealityRegularIcon } from "../regular/VirtualReality";
import { VirtualRealityIcon as VirtualRealityThinIcon } from "../thin/VirtualReality";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VirtualRealityThinIcon,
	light: VirtualRealityLightIcon,
	regular: VirtualRealityRegularIcon,
	bold: VirtualRealityBoldIcon,
	fill: VirtualRealityFillIcon,
	duotone: VirtualRealityDuotoneIcon,
} as const;

export function VirtualRealityIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VirtualRealityIcon as VirtualReality };
