import { LinkSimpleIcon as LinkSimpleBoldIcon } from "../bold/LinkSimple";
import { LinkSimpleIcon as LinkSimpleDuotoneIcon } from "../duotone/LinkSimple";
import { LinkSimpleIcon as LinkSimpleFillIcon } from "../fill/LinkSimple";
import { LinkSimpleIcon as LinkSimpleLightIcon } from "../light/LinkSimple";
import { LinkSimpleIcon as LinkSimpleRegularIcon } from "../regular/LinkSimple";
import { LinkSimpleIcon as LinkSimpleThinIcon } from "../thin/LinkSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkSimpleThinIcon,
	light: LinkSimpleLightIcon,
	regular: LinkSimpleRegularIcon,
	bold: LinkSimpleBoldIcon,
	fill: LinkSimpleFillIcon,
	duotone: LinkSimpleDuotoneIcon,
} as const;

export function LinkSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkSimpleIcon as LinkSimple };
