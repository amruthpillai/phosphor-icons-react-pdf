import { BeerSteinIcon as BeerSteinBoldIcon } from "../bold/BeerStein";
import { BeerSteinIcon as BeerSteinDuotoneIcon } from "../duotone/BeerStein";
import { BeerSteinIcon as BeerSteinFillIcon } from "../fill/BeerStein";
import { BeerSteinIcon as BeerSteinLightIcon } from "../light/BeerStein";
import { BeerSteinIcon as BeerSteinRegularIcon } from "../regular/BeerStein";
import { BeerSteinIcon as BeerSteinThinIcon } from "../thin/BeerStein";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BeerSteinThinIcon,
	light: BeerSteinLightIcon,
	regular: BeerSteinRegularIcon,
	bold: BeerSteinBoldIcon,
	fill: BeerSteinFillIcon,
	duotone: BeerSteinDuotoneIcon,
} as const;

export function BeerSteinIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BeerSteinIcon as BeerStein };
