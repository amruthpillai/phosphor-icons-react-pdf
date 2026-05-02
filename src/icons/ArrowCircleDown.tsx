import { ArrowCircleDownIcon as ArrowCircleDownBoldIcon } from "../bold/ArrowCircleDown";
import { ArrowCircleDownIcon as ArrowCircleDownDuotoneIcon } from "../duotone/ArrowCircleDown";
import { ArrowCircleDownIcon as ArrowCircleDownFillIcon } from "../fill/ArrowCircleDown";
import { ArrowCircleDownIcon as ArrowCircleDownLightIcon } from "../light/ArrowCircleDown";
import { ArrowCircleDownIcon as ArrowCircleDownRegularIcon } from "../regular/ArrowCircleDown";
import { ArrowCircleDownIcon as ArrowCircleDownThinIcon } from "../thin/ArrowCircleDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleDownThinIcon,
	light: ArrowCircleDownLightIcon,
	regular: ArrowCircleDownRegularIcon,
	bold: ArrowCircleDownBoldIcon,
	fill: ArrowCircleDownFillIcon,
	duotone: ArrowCircleDownDuotoneIcon,
} as const;

export function ArrowCircleDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleDownIcon as ArrowCircleDown };
