import { QuestionMarkIcon as QuestionMarkBoldIcon } from "../bold/QuestionMark";
import { QuestionMarkIcon as QuestionMarkDuotoneIcon } from "../duotone/QuestionMark";
import { QuestionMarkIcon as QuestionMarkFillIcon } from "../fill/QuestionMark";
import { QuestionMarkIcon as QuestionMarkLightIcon } from "../light/QuestionMark";
import { QuestionMarkIcon as QuestionMarkRegularIcon } from "../regular/QuestionMark";
import { QuestionMarkIcon as QuestionMarkThinIcon } from "../thin/QuestionMark";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: QuestionMarkThinIcon,
	light: QuestionMarkLightIcon,
	regular: QuestionMarkRegularIcon,
	bold: QuestionMarkBoldIcon,
	fill: QuestionMarkFillIcon,
	duotone: QuestionMarkDuotoneIcon,
} as const;

export function QuestionMarkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { QuestionMarkIcon as QuestionMark };
