import { ArrowLineRightIcon as ArrowLineRightBoldIcon } from "../bold/ArrowLineRight";
import { ArrowLineRightIcon as ArrowLineRightDuotoneIcon } from "../duotone/ArrowLineRight";
import { ArrowLineRightIcon as ArrowLineRightFillIcon } from "../fill/ArrowLineRight";
import { ArrowLineRightIcon as ArrowLineRightLightIcon } from "../light/ArrowLineRight";
import { ArrowLineRightIcon as ArrowLineRightRegularIcon } from "../regular/ArrowLineRight";
import { ArrowLineRightIcon as ArrowLineRightThinIcon } from "../thin/ArrowLineRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineRightThinIcon,
	light: ArrowLineRightLightIcon,
	regular: ArrowLineRightRegularIcon,
	bold: ArrowLineRightBoldIcon,
	fill: ArrowLineRightFillIcon,
	duotone: ArrowLineRightDuotoneIcon,
} as const;

export function ArrowLineRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineRightIcon as ArrowLineRight };
