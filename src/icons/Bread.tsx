import { BreadIcon as BreadBoldIcon } from "../bold/Bread";
import { BreadIcon as BreadDuotoneIcon } from "../duotone/Bread";
import { BreadIcon as BreadFillIcon } from "../fill/Bread";
import { BreadIcon as BreadLightIcon } from "../light/Bread";
import { BreadIcon as BreadRegularIcon } from "../regular/Bread";
import { BreadIcon as BreadThinIcon } from "../thin/Bread";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BreadThinIcon,
	light: BreadLightIcon,
	regular: BreadRegularIcon,
	bold: BreadBoldIcon,
	fill: BreadFillIcon,
	duotone: BreadDuotoneIcon,
} as const;

export function BreadIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BreadIcon as Bread };
