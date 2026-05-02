import { BookmarkIcon as BookmarkBoldIcon } from "../bold/Bookmark";
import { BookmarkIcon as BookmarkDuotoneIcon } from "../duotone/Bookmark";
import { BookmarkIcon as BookmarkFillIcon } from "../fill/Bookmark";
import { BookmarkIcon as BookmarkLightIcon } from "../light/Bookmark";
import { BookmarkIcon as BookmarkRegularIcon } from "../regular/Bookmark";
import { BookmarkIcon as BookmarkThinIcon } from "../thin/Bookmark";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookmarkThinIcon,
	light: BookmarkLightIcon,
	regular: BookmarkRegularIcon,
	bold: BookmarkBoldIcon,
	fill: BookmarkFillIcon,
	duotone: BookmarkDuotoneIcon,
} as const;

export function BookmarkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookmarkIcon as Bookmark };
