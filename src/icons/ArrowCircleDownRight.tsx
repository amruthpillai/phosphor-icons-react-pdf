import { ArrowCircleDownRightIcon as ArrowCircleDownRightBoldIcon } from "../bold/ArrowCircleDownRight";
import { ArrowCircleDownRightIcon as ArrowCircleDownRightDuotoneIcon } from "../duotone/ArrowCircleDownRight";
import { ArrowCircleDownRightIcon as ArrowCircleDownRightFillIcon } from "../fill/ArrowCircleDownRight";
import { ArrowCircleDownRightIcon as ArrowCircleDownRightLightIcon } from "../light/ArrowCircleDownRight";
import { ArrowCircleDownRightIcon as ArrowCircleDownRightRegularIcon } from "../regular/ArrowCircleDownRight";
import { ArrowCircleDownRightIcon as ArrowCircleDownRightThinIcon } from "../thin/ArrowCircleDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleDownRightThinIcon,
	light: ArrowCircleDownRightLightIcon,
	regular: ArrowCircleDownRightRegularIcon,
	bold: ArrowCircleDownRightBoldIcon,
	fill: ArrowCircleDownRightFillIcon,
	duotone: ArrowCircleDownRightDuotoneIcon,
} as const;

export function ArrowCircleDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleDownRightIcon as ArrowCircleDownRight };
