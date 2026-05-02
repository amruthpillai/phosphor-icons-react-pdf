import { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRightBoldIcon } from "../bold/ArrowBendDoubleUpRight";
import { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRightDuotoneIcon } from "../duotone/ArrowBendDoubleUpRight";
import { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRightFillIcon } from "../fill/ArrowBendDoubleUpRight";
import { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRightLightIcon } from "../light/ArrowBendDoubleUpRight";
import { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRightRegularIcon } from "../regular/ArrowBendDoubleUpRight";
import { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRightThinIcon } from "../thin/ArrowBendDoubleUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendDoubleUpRightThinIcon,
	light: ArrowBendDoubleUpRightLightIcon,
	regular: ArrowBendDoubleUpRightRegularIcon,
	bold: ArrowBendDoubleUpRightBoldIcon,
	fill: ArrowBendDoubleUpRightFillIcon,
	duotone: ArrowBendDoubleUpRightDuotoneIcon,
} as const;

export function ArrowBendDoubleUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendDoubleUpRightIcon as ArrowBendDoubleUpRight };
