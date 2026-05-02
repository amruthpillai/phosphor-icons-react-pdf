import { RugIcon as RugBoldIcon } from "../bold/Rug";
import { RugIcon as RugDuotoneIcon } from "../duotone/Rug";
import { RugIcon as RugFillIcon } from "../fill/Rug";
import { RugIcon as RugLightIcon } from "../light/Rug";
import { RugIcon as RugRegularIcon } from "../regular/Rug";
import { RugIcon as RugThinIcon } from "../thin/Rug";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RugThinIcon,
	light: RugLightIcon,
	regular: RugRegularIcon,
	bold: RugBoldIcon,
	fill: RugFillIcon,
	duotone: RugDuotoneIcon,
} as const;

export function RugIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RugIcon as Rug };
