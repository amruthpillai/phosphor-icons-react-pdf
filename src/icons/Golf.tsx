import { GolfIcon as GolfBoldIcon } from "../bold/Golf";
import { GolfIcon as GolfDuotoneIcon } from "../duotone/Golf";
import { GolfIcon as GolfFillIcon } from "../fill/Golf";
import { GolfIcon as GolfLightIcon } from "../light/Golf";
import { GolfIcon as GolfRegularIcon } from "../regular/Golf";
import { GolfIcon as GolfThinIcon } from "../thin/Golf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GolfThinIcon,
	light: GolfLightIcon,
	regular: GolfRegularIcon,
	bold: GolfBoldIcon,
	fill: GolfFillIcon,
	duotone: GolfDuotoneIcon,
} as const;

export function GolfIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GolfIcon as Golf };
