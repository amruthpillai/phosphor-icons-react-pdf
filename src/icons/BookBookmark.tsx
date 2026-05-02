import { BookBookmarkIcon as BookBookmarkBoldIcon } from "../bold/BookBookmark";
import { BookBookmarkIcon as BookBookmarkDuotoneIcon } from "../duotone/BookBookmark";
import { BookBookmarkIcon as BookBookmarkFillIcon } from "../fill/BookBookmark";
import { BookBookmarkIcon as BookBookmarkLightIcon } from "../light/BookBookmark";
import { BookBookmarkIcon as BookBookmarkRegularIcon } from "../regular/BookBookmark";
import { BookBookmarkIcon as BookBookmarkThinIcon } from "../thin/BookBookmark";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookBookmarkThinIcon,
	light: BookBookmarkLightIcon,
	regular: BookBookmarkRegularIcon,
	bold: BookBookmarkBoldIcon,
	fill: BookBookmarkFillIcon,
	duotone: BookBookmarkDuotoneIcon,
} as const;

export function BookBookmarkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookBookmarkIcon as BookBookmark };
