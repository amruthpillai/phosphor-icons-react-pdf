import { GenderIntersexIcon as GenderIntersexBoldIcon } from "../bold/GenderIntersex";
import { GenderIntersexIcon as GenderIntersexDuotoneIcon } from "../duotone/GenderIntersex";
import { GenderIntersexIcon as GenderIntersexFillIcon } from "../fill/GenderIntersex";
import { GenderIntersexIcon as GenderIntersexLightIcon } from "../light/GenderIntersex";
import { GenderIntersexIcon as GenderIntersexRegularIcon } from "../regular/GenderIntersex";
import { GenderIntersexIcon as GenderIntersexThinIcon } from "../thin/GenderIntersex";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GenderIntersexThinIcon,
	light: GenderIntersexLightIcon,
	regular: GenderIntersexRegularIcon,
	bold: GenderIntersexBoldIcon,
	fill: GenderIntersexFillIcon,
	duotone: GenderIntersexDuotoneIcon,
} as const;

export function GenderIntersexIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GenderIntersexIcon as GenderIntersex };
