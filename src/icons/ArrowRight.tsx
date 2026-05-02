import { ArrowRightIcon as ArrowRightBoldIcon } from "../bold/ArrowRight";
import { ArrowRightIcon as ArrowRightDuotoneIcon } from "../duotone/ArrowRight";
import { ArrowRightIcon as ArrowRightFillIcon } from "../fill/ArrowRight";
import { ArrowRightIcon as ArrowRightLightIcon } from "../light/ArrowRight";
import { ArrowRightIcon as ArrowRightRegularIcon } from "../regular/ArrowRight";
import { ArrowRightIcon as ArrowRightThinIcon } from "../thin/ArrowRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowRightThinIcon,
	light: ArrowRightLightIcon,
	regular: ArrowRightRegularIcon,
	bold: ArrowRightBoldIcon,
	fill: ArrowRightFillIcon,
	duotone: ArrowRightDuotoneIcon,
} as const;

export function ArrowRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowRightIcon as ArrowRight };
