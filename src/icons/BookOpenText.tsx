import { BookOpenTextIcon as BookOpenTextBoldIcon } from "../bold/BookOpenText";
import { BookOpenTextIcon as BookOpenTextDuotoneIcon } from "../duotone/BookOpenText";
import { BookOpenTextIcon as BookOpenTextFillIcon } from "../fill/BookOpenText";
import { BookOpenTextIcon as BookOpenTextLightIcon } from "../light/BookOpenText";
import { BookOpenTextIcon as BookOpenTextRegularIcon } from "../regular/BookOpenText";
import { BookOpenTextIcon as BookOpenTextThinIcon } from "../thin/BookOpenText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookOpenTextThinIcon,
	light: BookOpenTextLightIcon,
	regular: BookOpenTextRegularIcon,
	bold: BookOpenTextBoldIcon,
	fill: BookOpenTextFillIcon,
	duotone: BookOpenTextDuotoneIcon,
} as const;

export function BookOpenTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookOpenTextIcon as BookOpenText };
