import { BookIcon as BookBoldIcon } from "../bold/Book";
import { BookIcon as BookDuotoneIcon } from "../duotone/Book";
import { BookIcon as BookFillIcon } from "../fill/Book";
import { BookIcon as BookLightIcon } from "../light/Book";
import { BookIcon as BookRegularIcon } from "../regular/Book";
import { BookIcon as BookThinIcon } from "../thin/Book";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookThinIcon,
	light: BookLightIcon,
	regular: BookRegularIcon,
	bold: BookBoldIcon,
	fill: BookFillIcon,
	duotone: BookDuotoneIcon,
} as const;

export function BookIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookIcon as Book };
