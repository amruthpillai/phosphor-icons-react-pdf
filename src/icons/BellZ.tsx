import { BellZIcon as BellZBoldIcon } from "../bold/BellZ";
import { BellZIcon as BellZDuotoneIcon } from "../duotone/BellZ";
import { BellZIcon as BellZFillIcon } from "../fill/BellZ";
import { BellZIcon as BellZLightIcon } from "../light/BellZ";
import { BellZIcon as BellZRegularIcon } from "../regular/BellZ";
import { BellZIcon as BellZThinIcon } from "../thin/BellZ";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellZThinIcon,
	light: BellZLightIcon,
	regular: BellZRegularIcon,
	bold: BellZBoldIcon,
	fill: BellZFillIcon,
	duotone: BellZDuotoneIcon,
} as const;

export function BellZIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellZIcon as BellZ };
