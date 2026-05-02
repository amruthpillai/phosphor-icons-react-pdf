import { ArrowElbowDownRightIcon as ArrowElbowDownRightBoldIcon } from "../bold/ArrowElbowDownRight";
import { ArrowElbowDownRightIcon as ArrowElbowDownRightDuotoneIcon } from "../duotone/ArrowElbowDownRight";
import { ArrowElbowDownRightIcon as ArrowElbowDownRightFillIcon } from "../fill/ArrowElbowDownRight";
import { ArrowElbowDownRightIcon as ArrowElbowDownRightLightIcon } from "../light/ArrowElbowDownRight";
import { ArrowElbowDownRightIcon as ArrowElbowDownRightRegularIcon } from "../regular/ArrowElbowDownRight";
import { ArrowElbowDownRightIcon as ArrowElbowDownRightThinIcon } from "../thin/ArrowElbowDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowDownRightThinIcon,
	light: ArrowElbowDownRightLightIcon,
	regular: ArrowElbowDownRightRegularIcon,
	bold: ArrowElbowDownRightBoldIcon,
	fill: ArrowElbowDownRightFillIcon,
	duotone: ArrowElbowDownRightDuotoneIcon,
} as const;

export function ArrowElbowDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowDownRightIcon as ArrowElbowDownRight };
