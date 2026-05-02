import { NutIcon as NutBoldIcon } from "../bold/Nut";
import { NutIcon as NutDuotoneIcon } from "../duotone/Nut";
import { NutIcon as NutFillIcon } from "../fill/Nut";
import { NutIcon as NutLightIcon } from "../light/Nut";
import { NutIcon as NutRegularIcon } from "../regular/Nut";
import { NutIcon as NutThinIcon } from "../thin/Nut";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NutThinIcon,
	light: NutLightIcon,
	regular: NutRegularIcon,
	bold: NutBoldIcon,
	fill: NutFillIcon,
	duotone: NutDuotoneIcon,
} as const;

export function NutIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NutIcon as Nut };
