import { CowIcon as CowBoldIcon } from "../bold/Cow";
import { CowIcon as CowDuotoneIcon } from "../duotone/Cow";
import { CowIcon as CowFillIcon } from "../fill/Cow";
import { CowIcon as CowLightIcon } from "../light/Cow";
import { CowIcon as CowRegularIcon } from "../regular/Cow";
import { CowIcon as CowThinIcon } from "../thin/Cow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CowThinIcon,
	light: CowLightIcon,
	regular: CowRegularIcon,
	bold: CowBoldIcon,
	fill: CowFillIcon,
	duotone: CowDuotoneIcon,
} as const;

export function CowIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CowIcon as Cow };
