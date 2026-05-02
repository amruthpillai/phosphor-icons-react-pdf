import { EjectSimpleIcon as EjectSimpleBoldIcon } from "../bold/EjectSimple";
import { EjectSimpleIcon as EjectSimpleDuotoneIcon } from "../duotone/EjectSimple";
import { EjectSimpleIcon as EjectSimpleFillIcon } from "../fill/EjectSimple";
import { EjectSimpleIcon as EjectSimpleLightIcon } from "../light/EjectSimple";
import { EjectSimpleIcon as EjectSimpleRegularIcon } from "../regular/EjectSimple";
import { EjectSimpleIcon as EjectSimpleThinIcon } from "../thin/EjectSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EjectSimpleThinIcon,
	light: EjectSimpleLightIcon,
	regular: EjectSimpleRegularIcon,
	bold: EjectSimpleBoldIcon,
	fill: EjectSimpleFillIcon,
	duotone: EjectSimpleDuotoneIcon,
} as const;

export function EjectSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EjectSimpleIcon as EjectSimple };
