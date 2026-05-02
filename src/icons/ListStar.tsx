import { ListStarIcon as ListStarBoldIcon } from "../bold/ListStar";
import { ListStarIcon as ListStarDuotoneIcon } from "../duotone/ListStar";
import { ListStarIcon as ListStarFillIcon } from "../fill/ListStar";
import { ListStarIcon as ListStarLightIcon } from "../light/ListStar";
import { ListStarIcon as ListStarRegularIcon } from "../regular/ListStar";
import { ListStarIcon as ListStarThinIcon } from "../thin/ListStar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListStarThinIcon,
	light: ListStarLightIcon,
	regular: ListStarRegularIcon,
	bold: ListStarBoldIcon,
	fill: ListStarFillIcon,
	duotone: ListStarDuotoneIcon,
} as const;

export function ListStarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListStarIcon as ListStar };
