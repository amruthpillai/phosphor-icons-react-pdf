import { AnchorIcon as AnchorBoldIcon } from "../bold/Anchor";
import { AnchorIcon as AnchorDuotoneIcon } from "../duotone/Anchor";
import { AnchorIcon as AnchorFillIcon } from "../fill/Anchor";
import { AnchorIcon as AnchorLightIcon } from "../light/Anchor";
import { AnchorIcon as AnchorRegularIcon } from "../regular/Anchor";
import { AnchorIcon as AnchorThinIcon } from "../thin/Anchor";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AnchorThinIcon,
	light: AnchorLightIcon,
	regular: AnchorRegularIcon,
	bold: AnchorBoldIcon,
	fill: AnchorFillIcon,
	duotone: AnchorDuotoneIcon,
} as const;

export function AnchorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AnchorIcon as Anchor };
