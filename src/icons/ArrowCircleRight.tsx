import { ArrowCircleRightIcon as ArrowCircleRightBoldIcon } from "../bold/ArrowCircleRight";
import { ArrowCircleRightIcon as ArrowCircleRightDuotoneIcon } from "../duotone/ArrowCircleRight";
import { ArrowCircleRightIcon as ArrowCircleRightFillIcon } from "../fill/ArrowCircleRight";
import { ArrowCircleRightIcon as ArrowCircleRightLightIcon } from "../light/ArrowCircleRight";
import { ArrowCircleRightIcon as ArrowCircleRightRegularIcon } from "../regular/ArrowCircleRight";
import { ArrowCircleRightIcon as ArrowCircleRightThinIcon } from "../thin/ArrowCircleRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleRightThinIcon,
	light: ArrowCircleRightLightIcon,
	regular: ArrowCircleRightRegularIcon,
	bold: ArrowCircleRightBoldIcon,
	fill: ArrowCircleRightFillIcon,
	duotone: ArrowCircleRightDuotoneIcon,
} as const;

export function ArrowCircleRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleRightIcon as ArrowCircleRight };
