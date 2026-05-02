import { ArrowBendDownRightIcon as ArrowBendDownRightBoldIcon } from "../bold/ArrowBendDownRight";
import { ArrowBendDownRightIcon as ArrowBendDownRightDuotoneIcon } from "../duotone/ArrowBendDownRight";
import { ArrowBendDownRightIcon as ArrowBendDownRightFillIcon } from "../fill/ArrowBendDownRight";
import { ArrowBendDownRightIcon as ArrowBendDownRightLightIcon } from "../light/ArrowBendDownRight";
import { ArrowBendDownRightIcon as ArrowBendDownRightRegularIcon } from "../regular/ArrowBendDownRight";
import { ArrowBendDownRightIcon as ArrowBendDownRightThinIcon } from "../thin/ArrowBendDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendDownRightThinIcon,
	light: ArrowBendDownRightLightIcon,
	regular: ArrowBendDownRightRegularIcon,
	bold: ArrowBendDownRightBoldIcon,
	fill: ArrowBendDownRightFillIcon,
	duotone: ArrowBendDownRightDuotoneIcon,
} as const;

export function ArrowBendDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendDownRightIcon as ArrowBendDownRight };
