import { LetterCircleHIcon as LetterCircleHBoldIcon } from "../bold/LetterCircleH";
import { LetterCircleHIcon as LetterCircleHDuotoneIcon } from "../duotone/LetterCircleH";
import { LetterCircleHIcon as LetterCircleHFillIcon } from "../fill/LetterCircleH";
import { LetterCircleHIcon as LetterCircleHLightIcon } from "../light/LetterCircleH";
import { LetterCircleHIcon as LetterCircleHRegularIcon } from "../regular/LetterCircleH";
import { LetterCircleHIcon as LetterCircleHThinIcon } from "../thin/LetterCircleH";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LetterCircleHThinIcon,
	light: LetterCircleHLightIcon,
	regular: LetterCircleHRegularIcon,
	bold: LetterCircleHBoldIcon,
	fill: LetterCircleHFillIcon,
	duotone: LetterCircleHDuotoneIcon,
} as const;

export function LetterCircleHIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LetterCircleHIcon as LetterCircleH };
