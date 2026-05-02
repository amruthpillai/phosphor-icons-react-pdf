import { ArrowUDownRightIcon as ArrowUDownRightBoldIcon } from "../bold/ArrowUDownRight";
import { ArrowUDownRightIcon as ArrowUDownRightDuotoneIcon } from "../duotone/ArrowUDownRight";
import { ArrowUDownRightIcon as ArrowUDownRightFillIcon } from "../fill/ArrowUDownRight";
import { ArrowUDownRightIcon as ArrowUDownRightLightIcon } from "../light/ArrowUDownRight";
import { ArrowUDownRightIcon as ArrowUDownRightRegularIcon } from "../regular/ArrowUDownRight";
import { ArrowUDownRightIcon as ArrowUDownRightThinIcon } from "../thin/ArrowUDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUDownRightThinIcon,
	light: ArrowUDownRightLightIcon,
	regular: ArrowUDownRightRegularIcon,
	bold: ArrowUDownRightBoldIcon,
	fill: ArrowUDownRightFillIcon,
	duotone: ArrowUDownRightDuotoneIcon,
} as const;

export function ArrowUDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUDownRightIcon as ArrowUDownRight };
