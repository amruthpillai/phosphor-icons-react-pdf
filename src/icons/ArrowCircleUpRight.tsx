import { ArrowCircleUpRightIcon as ArrowCircleUpRightBoldIcon } from "../bold/ArrowCircleUpRight";
import { ArrowCircleUpRightIcon as ArrowCircleUpRightDuotoneIcon } from "../duotone/ArrowCircleUpRight";
import { ArrowCircleUpRightIcon as ArrowCircleUpRightFillIcon } from "../fill/ArrowCircleUpRight";
import { ArrowCircleUpRightIcon as ArrowCircleUpRightLightIcon } from "../light/ArrowCircleUpRight";
import { ArrowCircleUpRightIcon as ArrowCircleUpRightRegularIcon } from "../regular/ArrowCircleUpRight";
import { ArrowCircleUpRightIcon as ArrowCircleUpRightThinIcon } from "../thin/ArrowCircleUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleUpRightThinIcon,
	light: ArrowCircleUpRightLightIcon,
	regular: ArrowCircleUpRightRegularIcon,
	bold: ArrowCircleUpRightBoldIcon,
	fill: ArrowCircleUpRightFillIcon,
	duotone: ArrowCircleUpRightDuotoneIcon,
} as const;

export function ArrowCircleUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleUpRightIcon as ArrowCircleUpRight };
