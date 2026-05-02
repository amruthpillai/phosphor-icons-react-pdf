import { BooksIcon as BooksBoldIcon } from "../bold/Books";
import { BooksIcon as BooksDuotoneIcon } from "../duotone/Books";
import { BooksIcon as BooksFillIcon } from "../fill/Books";
import { BooksIcon as BooksLightIcon } from "../light/Books";
import { BooksIcon as BooksRegularIcon } from "../regular/Books";
import { BooksIcon as BooksThinIcon } from "../thin/Books";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BooksThinIcon,
	light: BooksLightIcon,
	regular: BooksRegularIcon,
	bold: BooksBoldIcon,
	fill: BooksFillIcon,
	duotone: BooksDuotoneIcon,
} as const;

export function BooksIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BooksIcon as Books };
