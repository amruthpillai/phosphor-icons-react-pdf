import { ChalkboardSimpleIcon as ChalkboardSimpleBoldIcon } from "../bold/ChalkboardSimple";
import { ChalkboardSimpleIcon as ChalkboardSimpleDuotoneIcon } from "../duotone/ChalkboardSimple";
import { ChalkboardSimpleIcon as ChalkboardSimpleFillIcon } from "../fill/ChalkboardSimple";
import { ChalkboardSimpleIcon as ChalkboardSimpleLightIcon } from "../light/ChalkboardSimple";
import { ChalkboardSimpleIcon as ChalkboardSimpleRegularIcon } from "../regular/ChalkboardSimple";
import { ChalkboardSimpleIcon as ChalkboardSimpleThinIcon } from "../thin/ChalkboardSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChalkboardSimpleThinIcon,
	light: ChalkboardSimpleLightIcon,
	regular: ChalkboardSimpleRegularIcon,
	bold: ChalkboardSimpleBoldIcon,
	fill: ChalkboardSimpleFillIcon,
	duotone: ChalkboardSimpleDuotoneIcon,
} as const;

export function ChalkboardSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChalkboardSimpleIcon as ChalkboardSimple };
