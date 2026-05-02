import { LetterCircleVIcon as LetterCircleVBoldIcon } from "../bold/LetterCircleV";
import { LetterCircleVIcon as LetterCircleVDuotoneIcon } from "../duotone/LetterCircleV";
import { LetterCircleVIcon as LetterCircleVFillIcon } from "../fill/LetterCircleV";
import { LetterCircleVIcon as LetterCircleVLightIcon } from "../light/LetterCircleV";
import { LetterCircleVIcon as LetterCircleVRegularIcon } from "../regular/LetterCircleV";
import { LetterCircleVIcon as LetterCircleVThinIcon } from "../thin/LetterCircleV";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LetterCircleVThinIcon,
	light: LetterCircleVLightIcon,
	regular: LetterCircleVRegularIcon,
	bold: LetterCircleVBoldIcon,
	fill: LetterCircleVFillIcon,
	duotone: LetterCircleVDuotoneIcon,
} as const;

export function LetterCircleVIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LetterCircleVIcon as LetterCircleV };
