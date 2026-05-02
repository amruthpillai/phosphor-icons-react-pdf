import { GlobeSimpleXIcon as GlobeSimpleXBoldIcon } from "../bold/GlobeSimpleX";
import { GlobeSimpleXIcon as GlobeSimpleXDuotoneIcon } from "../duotone/GlobeSimpleX";
import { GlobeSimpleXIcon as GlobeSimpleXFillIcon } from "../fill/GlobeSimpleX";
import { GlobeSimpleXIcon as GlobeSimpleXLightIcon } from "../light/GlobeSimpleX";
import { GlobeSimpleXIcon as GlobeSimpleXRegularIcon } from "../regular/GlobeSimpleX";
import { GlobeSimpleXIcon as GlobeSimpleXThinIcon } from "../thin/GlobeSimpleX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeSimpleXThinIcon,
	light: GlobeSimpleXLightIcon,
	regular: GlobeSimpleXRegularIcon,
	bold: GlobeSimpleXBoldIcon,
	fill: GlobeSimpleXFillIcon,
	duotone: GlobeSimpleXDuotoneIcon,
} as const;

export function GlobeSimpleXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeSimpleXIcon as GlobeSimpleX };
