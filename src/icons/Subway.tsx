import { SubwayIcon as SubwayBoldIcon } from "../bold/Subway";
import { SubwayIcon as SubwayDuotoneIcon } from "../duotone/Subway";
import { SubwayIcon as SubwayFillIcon } from "../fill/Subway";
import { SubwayIcon as SubwayLightIcon } from "../light/Subway";
import { SubwayIcon as SubwayRegularIcon } from "../regular/Subway";
import { SubwayIcon as SubwayThinIcon } from "../thin/Subway";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubwayThinIcon,
	light: SubwayLightIcon,
	regular: SubwayRegularIcon,
	bold: SubwayBoldIcon,
	fill: SubwayFillIcon,
	duotone: SubwayDuotoneIcon,
} as const;

export function SubwayIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubwayIcon as Subway };
