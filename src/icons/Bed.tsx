import { BedIcon as BedBoldIcon } from "../bold/Bed";
import { BedIcon as BedDuotoneIcon } from "../duotone/Bed";
import { BedIcon as BedFillIcon } from "../fill/Bed";
import { BedIcon as BedLightIcon } from "../light/Bed";
import { BedIcon as BedRegularIcon } from "../regular/Bed";
import { BedIcon as BedThinIcon } from "../thin/Bed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BedThinIcon,
	light: BedLightIcon,
	regular: BedRegularIcon,
	bold: BedBoldIcon,
	fill: BedFillIcon,
	duotone: BedDuotoneIcon,
} as const;

export function BedIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BedIcon as Bed };
