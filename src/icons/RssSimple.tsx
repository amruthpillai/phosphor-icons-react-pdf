import { RssSimpleIcon as RssSimpleBoldIcon } from "../bold/RssSimple";
import { RssSimpleIcon as RssSimpleDuotoneIcon } from "../duotone/RssSimple";
import { RssSimpleIcon as RssSimpleFillIcon } from "../fill/RssSimple";
import { RssSimpleIcon as RssSimpleLightIcon } from "../light/RssSimple";
import { RssSimpleIcon as RssSimpleRegularIcon } from "../regular/RssSimple";
import { RssSimpleIcon as RssSimpleThinIcon } from "../thin/RssSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RssSimpleThinIcon,
	light: RssSimpleLightIcon,
	regular: RssSimpleRegularIcon,
	bold: RssSimpleBoldIcon,
	fill: RssSimpleFillIcon,
	duotone: RssSimpleDuotoneIcon,
} as const;

export function RssSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RssSimpleIcon as RssSimple };
