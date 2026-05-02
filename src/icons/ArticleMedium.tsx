import { ArticleMediumIcon as ArticleMediumBoldIcon } from "../bold/ArticleMedium";
import { ArticleMediumIcon as ArticleMediumDuotoneIcon } from "../duotone/ArticleMedium";
import { ArticleMediumIcon as ArticleMediumFillIcon } from "../fill/ArticleMedium";
import { ArticleMediumIcon as ArticleMediumLightIcon } from "../light/ArticleMedium";
import { ArticleMediumIcon as ArticleMediumRegularIcon } from "../regular/ArticleMedium";
import { ArticleMediumIcon as ArticleMediumThinIcon } from "../thin/ArticleMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArticleMediumThinIcon,
	light: ArticleMediumLightIcon,
	regular: ArticleMediumRegularIcon,
	bold: ArticleMediumBoldIcon,
	fill: ArticleMediumFillIcon,
	duotone: ArticleMediumDuotoneIcon,
} as const;

export function ArticleMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArticleMediumIcon as ArticleMedium };
