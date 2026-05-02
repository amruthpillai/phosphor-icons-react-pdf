import { BookmarkSimpleIcon as BookmarkSimpleBoldIcon } from "../bold/BookmarkSimple";
import { BookmarkSimpleIcon as BookmarkSimpleDuotoneIcon } from "../duotone/BookmarkSimple";
import { BookmarkSimpleIcon as BookmarkSimpleFillIcon } from "../fill/BookmarkSimple";
import { BookmarkSimpleIcon as BookmarkSimpleLightIcon } from "../light/BookmarkSimple";
import { BookmarkSimpleIcon as BookmarkSimpleRegularIcon } from "../regular/BookmarkSimple";
import { BookmarkSimpleIcon as BookmarkSimpleThinIcon } from "../thin/BookmarkSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BookmarkSimpleThinIcon,
	light: BookmarkSimpleLightIcon,
	regular: BookmarkSimpleRegularIcon,
	bold: BookmarkSimpleBoldIcon,
	fill: BookmarkSimpleFillIcon,
	duotone: BookmarkSimpleDuotoneIcon,
} as const;

export function BookmarkSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BookmarkSimpleIcon as BookmarkSimple };
