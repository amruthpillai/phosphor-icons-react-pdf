import { ArrowsLeftRightIcon as ArrowsLeftRightBoldIcon } from "../bold/ArrowsLeftRight";
import { ArrowsLeftRightIcon as ArrowsLeftRightDuotoneIcon } from "../duotone/ArrowsLeftRight";
import { ArrowsLeftRightIcon as ArrowsLeftRightFillIcon } from "../fill/ArrowsLeftRight";
import { ArrowsLeftRightIcon as ArrowsLeftRightLightIcon } from "../light/ArrowsLeftRight";
import { ArrowsLeftRightIcon as ArrowsLeftRightRegularIcon } from "../regular/ArrowsLeftRight";
import { ArrowsLeftRightIcon as ArrowsLeftRightThinIcon } from "../thin/ArrowsLeftRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsLeftRightThinIcon,
	light: ArrowsLeftRightLightIcon,
	regular: ArrowsLeftRightRegularIcon,
	bold: ArrowsLeftRightBoldIcon,
	fill: ArrowsLeftRightFillIcon,
	duotone: ArrowsLeftRightDuotoneIcon,
} as const;

export function ArrowsLeftRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsLeftRightIcon as ArrowsLeftRight };
