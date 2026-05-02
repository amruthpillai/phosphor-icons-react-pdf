import { BrandyIcon as BrandyBoldIcon } from "../bold/Brandy";
import { BrandyIcon as BrandyDuotoneIcon } from "../duotone/Brandy";
import { BrandyIcon as BrandyFillIcon } from "../fill/Brandy";
import { BrandyIcon as BrandyLightIcon } from "../light/Brandy";
import { BrandyIcon as BrandyRegularIcon } from "../regular/Brandy";
import { BrandyIcon as BrandyThinIcon } from "../thin/Brandy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BrandyThinIcon,
	light: BrandyLightIcon,
	regular: BrandyRegularIcon,
	bold: BrandyBoldIcon,
	fill: BrandyFillIcon,
	duotone: BrandyDuotoneIcon,
} as const;

export function BrandyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BrandyIcon as Brandy };
