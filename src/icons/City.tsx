import { CityIcon as CityBoldIcon } from "../bold/City";
import { CityIcon as CityDuotoneIcon } from "../duotone/City";
import { CityIcon as CityFillIcon } from "../fill/City";
import { CityIcon as CityLightIcon } from "../light/City";
import { CityIcon as CityRegularIcon } from "../regular/City";
import { CityIcon as CityThinIcon } from "../thin/City";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CityThinIcon,
	light: CityLightIcon,
	regular: CityRegularIcon,
	bold: CityBoldIcon,
	fill: CityFillIcon,
	duotone: CityDuotoneIcon,
} as const;

export function CityIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CityIcon as City };
