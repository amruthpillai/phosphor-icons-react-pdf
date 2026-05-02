import { ArticleNyTimesIcon as ArticleNyTimesBoldIcon } from "../bold/ArticleNyTimes";
import { ArticleNyTimesIcon as ArticleNyTimesDuotoneIcon } from "../duotone/ArticleNyTimes";
import { ArticleNyTimesIcon as ArticleNyTimesFillIcon } from "../fill/ArticleNyTimes";
import { ArticleNyTimesIcon as ArticleNyTimesLightIcon } from "../light/ArticleNyTimes";
import { ArticleNyTimesIcon as ArticleNyTimesRegularIcon } from "../regular/ArticleNyTimes";
import { ArticleNyTimesIcon as ArticleNyTimesThinIcon } from "../thin/ArticleNyTimes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArticleNyTimesThinIcon,
	light: ArticleNyTimesLightIcon,
	regular: ArticleNyTimesRegularIcon,
	bold: ArticleNyTimesBoldIcon,
	fill: ArticleNyTimesFillIcon,
	duotone: ArticleNyTimesDuotoneIcon,
} as const;

export function ArticleNyTimesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArticleNyTimesIcon as ArticleNyTimes };
