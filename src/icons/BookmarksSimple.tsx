import { BookmarksSimpleIcon as BookmarksSimpleBoldIcon } from "../bold/BookmarksSimple";
import { BookmarksSimpleIcon as BookmarksSimpleDuotoneIcon } from "../duotone/BookmarksSimple";
import { BookmarksSimpleIcon as BookmarksSimpleFillIcon } from "../fill/BookmarksSimple";
import { BookmarksSimpleIcon as BookmarksSimpleLightIcon } from "../light/BookmarksSimple";
import { BookmarksSimpleIcon as BookmarksSimpleRegularIcon } from "../regular/BookmarksSimple";
import { BookmarksSimpleIcon as BookmarksSimpleThinIcon } from "../thin/BookmarksSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookmarksSimpleThinIcon,
	light: BookmarksSimpleLightIcon,
	regular: BookmarksSimpleRegularIcon,
	bold: BookmarksSimpleBoldIcon,
	fill: BookmarksSimpleFillIcon,
	duotone: BookmarksSimpleDuotoneIcon,
} as const;

export function BookmarksSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookmarksSimpleIcon as BookmarksSimple };
