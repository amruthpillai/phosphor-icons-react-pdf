import { ArrowBendUpRightIcon as ArrowBendUpRightBoldIcon } from "../bold/ArrowBendUpRight";
import { ArrowBendUpRightIcon as ArrowBendUpRightDuotoneIcon } from "../duotone/ArrowBendUpRight";
import { ArrowBendUpRightIcon as ArrowBendUpRightFillIcon } from "../fill/ArrowBendUpRight";
import { ArrowBendUpRightIcon as ArrowBendUpRightLightIcon } from "../light/ArrowBendUpRight";
import { ArrowBendUpRightIcon as ArrowBendUpRightRegularIcon } from "../regular/ArrowBendUpRight";
import { ArrowBendUpRightIcon as ArrowBendUpRightThinIcon } from "../thin/ArrowBendUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendUpRightThinIcon,
	light: ArrowBendUpRightLightIcon,
	regular: ArrowBendUpRightRegularIcon,
	bold: ArrowBendUpRightBoldIcon,
	fill: ArrowBendUpRightFillIcon,
	duotone: ArrowBendUpRightDuotoneIcon,
} as const;

export function ArrowBendUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendUpRightIcon as ArrowBendUpRight };
