import { BarnIcon as BarnBoldIcon } from "../bold/Barn";
import { BarnIcon as BarnDuotoneIcon } from "../duotone/Barn";
import { BarnIcon as BarnFillIcon } from "../fill/Barn";
import { BarnIcon as BarnLightIcon } from "../light/Barn";
import { BarnIcon as BarnRegularIcon } from "../regular/Barn";
import { BarnIcon as BarnThinIcon } from "../thin/Barn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BarnThinIcon,
	light: BarnLightIcon,
	regular: BarnRegularIcon,
	bold: BarnBoldIcon,
	fill: BarnFillIcon,
	duotone: BarnDuotoneIcon,
} as const;

export function BarnIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BarnIcon as Barn };
