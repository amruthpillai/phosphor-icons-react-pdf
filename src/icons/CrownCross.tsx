import { CrownCrossIcon as CrownCrossBoldIcon } from "../bold/CrownCross";
import { CrownCrossIcon as CrownCrossDuotoneIcon } from "../duotone/CrownCross";
import { CrownCrossIcon as CrownCrossFillIcon } from "../fill/CrownCross";
import { CrownCrossIcon as CrownCrossLightIcon } from "../light/CrownCross";
import { CrownCrossIcon as CrownCrossRegularIcon } from "../regular/CrownCross";
import { CrownCrossIcon as CrownCrossThinIcon } from "../thin/CrownCross";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CrownCrossThinIcon,
	light: CrownCrossLightIcon,
	regular: CrownCrossRegularIcon,
	bold: CrownCrossBoldIcon,
	fill: CrownCrossFillIcon,
	duotone: CrownCrossDuotoneIcon,
} as const;

export function CrownCrossIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CrownCrossIcon as CrownCross };
