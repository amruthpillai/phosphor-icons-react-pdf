import { ArrowDownRightIcon as ArrowDownRightBoldIcon } from "../bold/ArrowDownRight";
import { ArrowDownRightIcon as ArrowDownRightDuotoneIcon } from "../duotone/ArrowDownRight";
import { ArrowDownRightIcon as ArrowDownRightFillIcon } from "../fill/ArrowDownRight";
import { ArrowDownRightIcon as ArrowDownRightLightIcon } from "../light/ArrowDownRight";
import { ArrowDownRightIcon as ArrowDownRightRegularIcon } from "../regular/ArrowDownRight";
import { ArrowDownRightIcon as ArrowDownRightThinIcon } from "../thin/ArrowDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowDownRightThinIcon,
	light: ArrowDownRightLightIcon,
	regular: ArrowDownRightRegularIcon,
	bold: ArrowDownRightBoldIcon,
	fill: ArrowDownRightFillIcon,
	duotone: ArrowDownRightDuotoneIcon,
} as const;

export function ArrowDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowDownRightIcon as ArrowDownRight };
