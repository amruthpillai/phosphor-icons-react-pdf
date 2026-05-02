import { ArrowsInIcon as ArrowsInBoldIcon } from "../bold/ArrowsIn";
import { ArrowsInIcon as ArrowsInDuotoneIcon } from "../duotone/ArrowsIn";
import { ArrowsInIcon as ArrowsInFillIcon } from "../fill/ArrowsIn";
import { ArrowsInIcon as ArrowsInLightIcon } from "../light/ArrowsIn";
import { ArrowsInIcon as ArrowsInRegularIcon } from "../regular/ArrowsIn";
import { ArrowsInIcon as ArrowsInThinIcon } from "../thin/ArrowsIn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsInThinIcon,
	light: ArrowsInLightIcon,
	regular: ArrowsInRegularIcon,
	bold: ArrowsInBoldIcon,
	fill: ArrowsInFillIcon,
	duotone: ArrowsInDuotoneIcon,
} as const;

export function ArrowsInIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsInIcon as ArrowsIn };
