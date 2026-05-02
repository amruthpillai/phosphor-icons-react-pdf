import { LegoIcon as LegoBoldIcon } from "../bold/Lego";
import { LegoIcon as LegoDuotoneIcon } from "../duotone/Lego";
import { LegoIcon as LegoFillIcon } from "../fill/Lego";
import { LegoIcon as LegoLightIcon } from "../light/Lego";
import { LegoIcon as LegoRegularIcon } from "../regular/Lego";
import { LegoIcon as LegoThinIcon } from "../thin/Lego";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LegoThinIcon,
	light: LegoLightIcon,
	regular: LegoRegularIcon,
	bold: LegoBoldIcon,
	fill: LegoFillIcon,
	duotone: LegoDuotoneIcon,
} as const;

export function LegoIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LegoIcon as Lego };
