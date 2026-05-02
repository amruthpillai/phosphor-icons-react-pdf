import { ArrowLineUpRightIcon as ArrowLineUpRightBoldIcon } from "../bold/ArrowLineUpRight";
import { ArrowLineUpRightIcon as ArrowLineUpRightDuotoneIcon } from "../duotone/ArrowLineUpRight";
import { ArrowLineUpRightIcon as ArrowLineUpRightFillIcon } from "../fill/ArrowLineUpRight";
import { ArrowLineUpRightIcon as ArrowLineUpRightLightIcon } from "../light/ArrowLineUpRight";
import { ArrowLineUpRightIcon as ArrowLineUpRightRegularIcon } from "../regular/ArrowLineUpRight";
import { ArrowLineUpRightIcon as ArrowLineUpRightThinIcon } from "../thin/ArrowLineUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineUpRightThinIcon,
	light: ArrowLineUpRightLightIcon,
	regular: ArrowLineUpRightRegularIcon,
	bold: ArrowLineUpRightBoldIcon,
	fill: ArrowLineUpRightFillIcon,
	duotone: ArrowLineUpRightDuotoneIcon,
} as const;

export function ArrowLineUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineUpRightIcon as ArrowLineUpRight };
