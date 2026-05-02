import { LinkSimpleHorizontalIcon as LinkSimpleHorizontalBoldIcon } from "../bold/LinkSimpleHorizontal";
import { LinkSimpleHorizontalIcon as LinkSimpleHorizontalDuotoneIcon } from "../duotone/LinkSimpleHorizontal";
import { LinkSimpleHorizontalIcon as LinkSimpleHorizontalFillIcon } from "../fill/LinkSimpleHorizontal";
import { LinkSimpleHorizontalIcon as LinkSimpleHorizontalLightIcon } from "../light/LinkSimpleHorizontal";
import { LinkSimpleHorizontalIcon as LinkSimpleHorizontalRegularIcon } from "../regular/LinkSimpleHorizontal";
import { LinkSimpleHorizontalIcon as LinkSimpleHorizontalThinIcon } from "../thin/LinkSimpleHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkSimpleHorizontalThinIcon,
	light: LinkSimpleHorizontalLightIcon,
	regular: LinkSimpleHorizontalRegularIcon,
	bold: LinkSimpleHorizontalBoldIcon,
	fill: LinkSimpleHorizontalFillIcon,
	duotone: LinkSimpleHorizontalDuotoneIcon,
} as const;

export function LinkSimpleHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkSimpleHorizontalIcon as LinkSimpleHorizontal };
