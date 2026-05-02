import { DropSimpleIcon as DropSimpleBoldIcon } from "../bold/DropSimple";
import { DropSimpleIcon as DropSimpleDuotoneIcon } from "../duotone/DropSimple";
import { DropSimpleIcon as DropSimpleFillIcon } from "../fill/DropSimple";
import { DropSimpleIcon as DropSimpleLightIcon } from "../light/DropSimple";
import { DropSimpleIcon as DropSimpleRegularIcon } from "../regular/DropSimple";
import { DropSimpleIcon as DropSimpleThinIcon } from "../thin/DropSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DropSimpleThinIcon,
	light: DropSimpleLightIcon,
	regular: DropSimpleRegularIcon,
	bold: DropSimpleBoldIcon,
	fill: DropSimpleFillIcon,
	duotone: DropSimpleDuotoneIcon,
} as const;

export function DropSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DropSimpleIcon as DropSimple };
