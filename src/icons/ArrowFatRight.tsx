import { ArrowFatRightIcon as ArrowFatRightBoldIcon } from "../bold/ArrowFatRight";
import { ArrowFatRightIcon as ArrowFatRightDuotoneIcon } from "../duotone/ArrowFatRight";
import { ArrowFatRightIcon as ArrowFatRightFillIcon } from "../fill/ArrowFatRight";
import { ArrowFatRightIcon as ArrowFatRightLightIcon } from "../light/ArrowFatRight";
import { ArrowFatRightIcon as ArrowFatRightRegularIcon } from "../regular/ArrowFatRight";
import { ArrowFatRightIcon as ArrowFatRightThinIcon } from "../thin/ArrowFatRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatRightThinIcon,
	light: ArrowFatRightLightIcon,
	regular: ArrowFatRightRegularIcon,
	bold: ArrowFatRightBoldIcon,
	fill: ArrowFatRightFillIcon,
	duotone: ArrowFatRightDuotoneIcon,
} as const;

export function ArrowFatRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatRightIcon as ArrowFatRight };
