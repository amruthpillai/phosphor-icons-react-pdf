import { ArrowBendUpLeftIcon as ArrowBendUpLeftBoldIcon } from "../bold/ArrowBendUpLeft";
import { ArrowBendUpLeftIcon as ArrowBendUpLeftDuotoneIcon } from "../duotone/ArrowBendUpLeft";
import { ArrowBendUpLeftIcon as ArrowBendUpLeftFillIcon } from "../fill/ArrowBendUpLeft";
import { ArrowBendUpLeftIcon as ArrowBendUpLeftLightIcon } from "../light/ArrowBendUpLeft";
import { ArrowBendUpLeftIcon as ArrowBendUpLeftRegularIcon } from "../regular/ArrowBendUpLeft";
import { ArrowBendUpLeftIcon as ArrowBendUpLeftThinIcon } from "../thin/ArrowBendUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendUpLeftThinIcon,
	light: ArrowBendUpLeftLightIcon,
	regular: ArrowBendUpLeftRegularIcon,
	bold: ArrowBendUpLeftBoldIcon,
	fill: ArrowBendUpLeftFillIcon,
	duotone: ArrowBendUpLeftDuotoneIcon,
} as const;

export function ArrowBendUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendUpLeftIcon as ArrowBendUpLeft };
