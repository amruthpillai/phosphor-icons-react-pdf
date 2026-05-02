import { LetterCirclePIcon as LetterCirclePBoldIcon } from "../bold/LetterCircleP";
import { LetterCirclePIcon as LetterCirclePDuotoneIcon } from "../duotone/LetterCircleP";
import { LetterCirclePIcon as LetterCirclePFillIcon } from "../fill/LetterCircleP";
import { LetterCirclePIcon as LetterCirclePLightIcon } from "../light/LetterCircleP";
import { LetterCirclePIcon as LetterCirclePRegularIcon } from "../regular/LetterCircleP";
import { LetterCirclePIcon as LetterCirclePThinIcon } from "../thin/LetterCircleP";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LetterCirclePThinIcon,
	light: LetterCirclePLightIcon,
	regular: LetterCirclePRegularIcon,
	bold: LetterCirclePBoldIcon,
	fill: LetterCirclePFillIcon,
	duotone: LetterCirclePDuotoneIcon,
} as const;

export function LetterCirclePIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LetterCirclePIcon as LetterCircleP };
