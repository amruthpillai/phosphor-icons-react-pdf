import { StampIcon as StampBoldIcon } from "../bold/Stamp";
import { StampIcon as StampDuotoneIcon } from "../duotone/Stamp";
import { StampIcon as StampFillIcon } from "../fill/Stamp";
import { StampIcon as StampLightIcon } from "../light/Stamp";
import { StampIcon as StampRegularIcon } from "../regular/Stamp";
import { StampIcon as StampThinIcon } from "../thin/Stamp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StampThinIcon,
	light: StampLightIcon,
	regular: StampRegularIcon,
	bold: StampBoldIcon,
	fill: StampFillIcon,
	duotone: StampDuotoneIcon,
} as const;

export function StampIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StampIcon as Stamp };
