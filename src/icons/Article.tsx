import { ArticleIcon as ArticleBoldIcon } from "../bold/Article";
import { ArticleIcon as ArticleDuotoneIcon } from "../duotone/Article";
import { ArticleIcon as ArticleFillIcon } from "../fill/Article";
import { ArticleIcon as ArticleLightIcon } from "../light/Article";
import { ArticleIcon as ArticleRegularIcon } from "../regular/Article";
import { ArticleIcon as ArticleThinIcon } from "../thin/Article";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArticleThinIcon,
	light: ArticleLightIcon,
	regular: ArticleRegularIcon,
	bold: ArticleBoldIcon,
	fill: ArticleFillIcon,
	duotone: ArticleDuotoneIcon,
} as const;

export function ArticleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArticleIcon as Article };
