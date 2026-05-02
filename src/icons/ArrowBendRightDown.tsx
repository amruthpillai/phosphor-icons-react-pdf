import { ArrowBendRightDownIcon as ArrowBendRightDownBoldIcon } from "../bold/ArrowBendRightDown";
import { ArrowBendRightDownIcon as ArrowBendRightDownDuotoneIcon } from "../duotone/ArrowBendRightDown";
import { ArrowBendRightDownIcon as ArrowBendRightDownFillIcon } from "../fill/ArrowBendRightDown";
import { ArrowBendRightDownIcon as ArrowBendRightDownLightIcon } from "../light/ArrowBendRightDown";
import { ArrowBendRightDownIcon as ArrowBendRightDownRegularIcon } from "../regular/ArrowBendRightDown";
import { ArrowBendRightDownIcon as ArrowBendRightDownThinIcon } from "../thin/ArrowBendRightDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendRightDownThinIcon,
	light: ArrowBendRightDownLightIcon,
	regular: ArrowBendRightDownRegularIcon,
	bold: ArrowBendRightDownBoldIcon,
	fill: ArrowBendRightDownFillIcon,
	duotone: ArrowBendRightDownDuotoneIcon,
} as const;

export function ArrowBendRightDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendRightDownIcon as ArrowBendRightDown };
