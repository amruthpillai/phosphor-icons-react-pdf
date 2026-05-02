import { ListHeartIcon as ListHeartBoldIcon } from "../bold/ListHeart";
import { ListHeartIcon as ListHeartDuotoneIcon } from "../duotone/ListHeart";
import { ListHeartIcon as ListHeartFillIcon } from "../fill/ListHeart";
import { ListHeartIcon as ListHeartLightIcon } from "../light/ListHeart";
import { ListHeartIcon as ListHeartRegularIcon } from "../regular/ListHeart";
import { ListHeartIcon as ListHeartThinIcon } from "../thin/ListHeart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListHeartThinIcon,
	light: ListHeartLightIcon,
	regular: ListHeartRegularIcon,
	bold: ListHeartBoldIcon,
	fill: ListHeartFillIcon,
	duotone: ListHeartDuotoneIcon,
} as const;

export function ListHeartIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListHeartIcon as ListHeart };
