import { ArrowUpRightIcon as ArrowUpRightBoldIcon } from "../bold/ArrowUpRight";
import { ArrowUpRightIcon as ArrowUpRightDuotoneIcon } from "../duotone/ArrowUpRight";
import { ArrowUpRightIcon as ArrowUpRightFillIcon } from "../fill/ArrowUpRight";
import { ArrowUpRightIcon as ArrowUpRightLightIcon } from "../light/ArrowUpRight";
import { ArrowUpRightIcon as ArrowUpRightRegularIcon } from "../regular/ArrowUpRight";
import { ArrowUpRightIcon as ArrowUpRightThinIcon } from "../thin/ArrowUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUpRightThinIcon,
	light: ArrowUpRightLightIcon,
	regular: ArrowUpRightRegularIcon,
	bold: ArrowUpRightBoldIcon,
	fill: ArrowUpRightFillIcon,
	duotone: ArrowUpRightDuotoneIcon,
} as const;

export function ArrowUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUpRightIcon as ArrowUpRight };
