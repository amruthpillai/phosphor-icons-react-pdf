import { HorseIcon as HorseBoldIcon } from "../bold/Horse";
import { HorseIcon as HorseDuotoneIcon } from "../duotone/Horse";
import { HorseIcon as HorseFillIcon } from "../fill/Horse";
import { HorseIcon as HorseLightIcon } from "../light/Horse";
import { HorseIcon as HorseRegularIcon } from "../regular/Horse";
import { HorseIcon as HorseThinIcon } from "../thin/Horse";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HorseThinIcon,
	light: HorseLightIcon,
	regular: HorseRegularIcon,
	bold: HorseBoldIcon,
	fill: HorseFillIcon,
	duotone: HorseDuotoneIcon,
} as const;

export function HorseIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HorseIcon as Horse };
