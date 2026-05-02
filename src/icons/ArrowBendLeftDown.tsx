import { ArrowBendLeftDownIcon as ArrowBendLeftDownBoldIcon } from "../bold/ArrowBendLeftDown";
import { ArrowBendLeftDownIcon as ArrowBendLeftDownDuotoneIcon } from "../duotone/ArrowBendLeftDown";
import { ArrowBendLeftDownIcon as ArrowBendLeftDownFillIcon } from "../fill/ArrowBendLeftDown";
import { ArrowBendLeftDownIcon as ArrowBendLeftDownLightIcon } from "../light/ArrowBendLeftDown";
import { ArrowBendLeftDownIcon as ArrowBendLeftDownRegularIcon } from "../regular/ArrowBendLeftDown";
import { ArrowBendLeftDownIcon as ArrowBendLeftDownThinIcon } from "../thin/ArrowBendLeftDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendLeftDownThinIcon,
	light: ArrowBendLeftDownLightIcon,
	regular: ArrowBendLeftDownRegularIcon,
	bold: ArrowBendLeftDownBoldIcon,
	fill: ArrowBendLeftDownFillIcon,
	duotone: ArrowBendLeftDownDuotoneIcon,
} as const;

export function ArrowBendLeftDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendLeftDownIcon as ArrowBendLeftDown };
