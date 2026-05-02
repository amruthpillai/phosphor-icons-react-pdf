import { BookmarksIcon as BookmarksBoldIcon } from "../bold/Bookmarks";
import { BookmarksIcon as BookmarksDuotoneIcon } from "../duotone/Bookmarks";
import { BookmarksIcon as BookmarksFillIcon } from "../fill/Bookmarks";
import { BookmarksIcon as BookmarksLightIcon } from "../light/Bookmarks";
import { BookmarksIcon as BookmarksRegularIcon } from "../regular/Bookmarks";
import { BookmarksIcon as BookmarksThinIcon } from "../thin/Bookmarks";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookmarksThinIcon,
	light: BookmarksLightIcon,
	regular: BookmarksRegularIcon,
	bold: BookmarksBoldIcon,
	fill: BookmarksFillIcon,
	duotone: BookmarksDuotoneIcon,
} as const;

export function BookmarksIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookmarksIcon as Bookmarks };
