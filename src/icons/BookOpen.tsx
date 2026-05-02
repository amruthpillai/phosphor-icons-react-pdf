import { BookOpenIcon as BookOpenBoldIcon } from "../bold/BookOpen";
import { BookOpenIcon as BookOpenDuotoneIcon } from "../duotone/BookOpen";
import { BookOpenIcon as BookOpenFillIcon } from "../fill/BookOpen";
import { BookOpenIcon as BookOpenLightIcon } from "../light/BookOpen";
import { BookOpenIcon as BookOpenRegularIcon } from "../regular/BookOpen";
import { BookOpenIcon as BookOpenThinIcon } from "../thin/BookOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookOpenThinIcon,
	light: BookOpenLightIcon,
	regular: BookOpenRegularIcon,
	bold: BookOpenBoldIcon,
	fill: BookOpenFillIcon,
	duotone: BookOpenDuotoneIcon,
} as const;

export function BookOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookOpenIcon as BookOpen };
