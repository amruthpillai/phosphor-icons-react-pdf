import { GlobeXIcon as GlobeXBoldIcon } from "../bold/GlobeX";
import { GlobeXIcon as GlobeXDuotoneIcon } from "../duotone/GlobeX";
import { GlobeXIcon as GlobeXFillIcon } from "../fill/GlobeX";
import { GlobeXIcon as GlobeXLightIcon } from "../light/GlobeX";
import { GlobeXIcon as GlobeXRegularIcon } from "../regular/GlobeX";
import { GlobeXIcon as GlobeXThinIcon } from "../thin/GlobeX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeXThinIcon,
	light: GlobeXLightIcon,
	regular: GlobeXRegularIcon,
	bold: GlobeXBoldIcon,
	fill: GlobeXFillIcon,
	duotone: GlobeXDuotoneIcon,
} as const;

export function GlobeXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeXIcon as GlobeX };
