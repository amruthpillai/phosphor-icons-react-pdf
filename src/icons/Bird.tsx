import { BirdIcon as BirdBoldIcon } from "../bold/Bird";
import { BirdIcon as BirdDuotoneIcon } from "../duotone/Bird";
import { BirdIcon as BirdFillIcon } from "../fill/Bird";
import { BirdIcon as BirdLightIcon } from "../light/Bird";
import { BirdIcon as BirdRegularIcon } from "../regular/Bird";
import { BirdIcon as BirdThinIcon } from "../thin/Bird";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BirdThinIcon,
	light: BirdLightIcon,
	regular: BirdRegularIcon,
	bold: BirdBoldIcon,
	fill: BirdFillIcon,
	duotone: BirdDuotoneIcon,
} as const;

export function BirdIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BirdIcon as Bird };
