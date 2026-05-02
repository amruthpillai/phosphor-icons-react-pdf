import { QuestionIcon as QuestionBoldIcon } from "../bold/Question";
import { QuestionIcon as QuestionDuotoneIcon } from "../duotone/Question";
import { QuestionIcon as QuestionFillIcon } from "../fill/Question";
import { QuestionIcon as QuestionLightIcon } from "../light/Question";
import { QuestionIcon as QuestionRegularIcon } from "../regular/Question";
import { QuestionIcon as QuestionThinIcon } from "../thin/Question";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: QuestionThinIcon,
	light: QuestionLightIcon,
	regular: QuestionRegularIcon,
	bold: QuestionBoldIcon,
	fill: QuestionFillIcon,
	duotone: QuestionDuotoneIcon,
} as const;

export function QuestionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { QuestionIcon as Question };
