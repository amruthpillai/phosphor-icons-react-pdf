import { GenderNonbinaryIcon as GenderNonbinaryBoldIcon } from "../bold/GenderNonbinary";
import { GenderNonbinaryIcon as GenderNonbinaryDuotoneIcon } from "../duotone/GenderNonbinary";
import { GenderNonbinaryIcon as GenderNonbinaryFillIcon } from "../fill/GenderNonbinary";
import { GenderNonbinaryIcon as GenderNonbinaryLightIcon } from "../light/GenderNonbinary";
import { GenderNonbinaryIcon as GenderNonbinaryRegularIcon } from "../regular/GenderNonbinary";
import { GenderNonbinaryIcon as GenderNonbinaryThinIcon } from "../thin/GenderNonbinary";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GenderNonbinaryThinIcon,
	light: GenderNonbinaryLightIcon,
	regular: GenderNonbinaryRegularIcon,
	bold: GenderNonbinaryBoldIcon,
	fill: GenderNonbinaryFillIcon,
	duotone: GenderNonbinaryDuotoneIcon,
} as const;

export function GenderNonbinaryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GenderNonbinaryIcon as GenderNonbinary };
