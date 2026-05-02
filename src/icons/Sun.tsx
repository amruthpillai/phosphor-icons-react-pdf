import { SunIcon as SunBoldIcon } from "../bold/Sun";
import { SunIcon as SunDuotoneIcon } from "../duotone/Sun";
import { SunIcon as SunFillIcon } from "../fill/Sun";
import { SunIcon as SunLightIcon } from "../light/Sun";
import { SunIcon as SunRegularIcon } from "../regular/Sun";
import { SunIcon as SunThinIcon } from "../thin/Sun";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SunThinIcon,
	light: SunLightIcon,
	regular: SunRegularIcon,
	bold: SunBoldIcon,
	fill: SunFillIcon,
	duotone: SunDuotoneIcon,
} as const;

export function SunIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SunIcon as Sun };
