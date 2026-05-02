import { SealQuestionIcon as SealQuestionBoldIcon } from "../bold/SealQuestion";
import { SealQuestionIcon as SealQuestionDuotoneIcon } from "../duotone/SealQuestion";
import { SealQuestionIcon as SealQuestionFillIcon } from "../fill/SealQuestion";
import { SealQuestionIcon as SealQuestionLightIcon } from "../light/SealQuestion";
import { SealQuestionIcon as SealQuestionRegularIcon } from "../regular/SealQuestion";
import { SealQuestionIcon as SealQuestionThinIcon } from "../thin/SealQuestion";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SealQuestionThinIcon,
	light: SealQuestionLightIcon,
	regular: SealQuestionRegularIcon,
	bold: SealQuestionBoldIcon,
	fill: SealQuestionFillIcon,
	duotone: SealQuestionDuotoneIcon,
} as const;

export function SealQuestionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SealQuestionIcon as SealQuestion };
