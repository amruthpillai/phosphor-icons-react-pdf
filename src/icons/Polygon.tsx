import { PolygonIcon as PolygonBoldIcon } from "../bold/Polygon";
import { PolygonIcon as PolygonDuotoneIcon } from "../duotone/Polygon";
import { PolygonIcon as PolygonFillIcon } from "../fill/Polygon";
import { PolygonIcon as PolygonLightIcon } from "../light/Polygon";
import { PolygonIcon as PolygonRegularIcon } from "../regular/Polygon";
import { PolygonIcon as PolygonThinIcon } from "../thin/Polygon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PolygonThinIcon,
	light: PolygonLightIcon,
	regular: PolygonRegularIcon,
	bold: PolygonBoldIcon,
	fill: PolygonFillIcon,
	duotone: PolygonDuotoneIcon,
} as const;

export function PolygonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PolygonIcon as Polygon };
