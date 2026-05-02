import { ArrowArcRightIcon as ArrowArcRightBoldIcon } from "../bold/ArrowArcRight";
import { ArrowArcRightIcon as ArrowArcRightDuotoneIcon } from "../duotone/ArrowArcRight";
import { ArrowArcRightIcon as ArrowArcRightFillIcon } from "../fill/ArrowArcRight";
import { ArrowArcRightIcon as ArrowArcRightLightIcon } from "../light/ArrowArcRight";
import { ArrowArcRightIcon as ArrowArcRightRegularIcon } from "../regular/ArrowArcRight";
import { ArrowArcRightIcon as ArrowArcRightThinIcon } from "../thin/ArrowArcRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowArcRightThinIcon,
	light: ArrowArcRightLightIcon,
	regular: ArrowArcRightRegularIcon,
	bold: ArrowArcRightBoldIcon,
	fill: ArrowArcRightFillIcon,
	duotone: ArrowArcRightDuotoneIcon,
} as const;

export function ArrowArcRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowArcRightIcon as ArrowArcRight };
