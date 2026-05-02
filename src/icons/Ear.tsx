import { EarIcon as EarBoldIcon } from "../bold/Ear";
import { EarIcon as EarDuotoneIcon } from "../duotone/Ear";
import { EarIcon as EarFillIcon } from "../fill/Ear";
import { EarIcon as EarLightIcon } from "../light/Ear";
import { EarIcon as EarRegularIcon } from "../regular/Ear";
import { EarIcon as EarThinIcon } from "../thin/Ear";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EarThinIcon,
	light: EarLightIcon,
	regular: EarRegularIcon,
	bold: EarBoldIcon,
	fill: EarFillIcon,
	duotone: EarDuotoneIcon,
} as const;

export function EarIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EarIcon as Ear };
