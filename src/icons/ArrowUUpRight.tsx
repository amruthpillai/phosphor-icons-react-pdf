import { ArrowUUpRightIcon as ArrowUUpRightBoldIcon } from "../bold/ArrowUUpRight";
import { ArrowUUpRightIcon as ArrowUUpRightDuotoneIcon } from "../duotone/ArrowUUpRight";
import { ArrowUUpRightIcon as ArrowUUpRightFillIcon } from "../fill/ArrowUUpRight";
import { ArrowUUpRightIcon as ArrowUUpRightLightIcon } from "../light/ArrowUUpRight";
import { ArrowUUpRightIcon as ArrowUUpRightRegularIcon } from "../regular/ArrowUUpRight";
import { ArrowUUpRightIcon as ArrowUUpRightThinIcon } from "../thin/ArrowUUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUUpRightThinIcon,
	light: ArrowUUpRightLightIcon,
	regular: ArrowUUpRightRegularIcon,
	bold: ArrowUUpRightBoldIcon,
	fill: ArrowUUpRightFillIcon,
	duotone: ArrowUUpRightDuotoneIcon,
} as const;

export function ArrowUUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUUpRightIcon as ArrowUUpRight };
