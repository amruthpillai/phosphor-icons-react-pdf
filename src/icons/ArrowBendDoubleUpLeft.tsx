import { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeftBoldIcon } from "../bold/ArrowBendDoubleUpLeft";
import { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeftDuotoneIcon } from "../duotone/ArrowBendDoubleUpLeft";
import { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeftFillIcon } from "../fill/ArrowBendDoubleUpLeft";
import { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeftLightIcon } from "../light/ArrowBendDoubleUpLeft";
import { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeftRegularIcon } from "../regular/ArrowBendDoubleUpLeft";
import { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeftThinIcon } from "../thin/ArrowBendDoubleUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendDoubleUpLeftThinIcon,
	light: ArrowBendDoubleUpLeftLightIcon,
	regular: ArrowBendDoubleUpLeftRegularIcon,
	bold: ArrowBendDoubleUpLeftBoldIcon,
	fill: ArrowBendDoubleUpLeftFillIcon,
	duotone: ArrowBendDoubleUpLeftDuotoneIcon,
} as const;

export function ArrowBendDoubleUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendDoubleUpLeftIcon as ArrowBendDoubleUpLeft };
