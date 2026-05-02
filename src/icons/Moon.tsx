import { MoonIcon as MoonBoldIcon } from "../bold/Moon";
import { MoonIcon as MoonDuotoneIcon } from "../duotone/Moon";
import { MoonIcon as MoonFillIcon } from "../fill/Moon";
import { MoonIcon as MoonLightIcon } from "../light/Moon";
import { MoonIcon as MoonRegularIcon } from "../regular/Moon";
import { MoonIcon as MoonThinIcon } from "../thin/Moon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MoonThinIcon,
	light: MoonLightIcon,
	regular: MoonRegularIcon,
	bold: MoonBoldIcon,
	fill: MoonFillIcon,
	duotone: MoonDuotoneIcon,
} as const;

export function MoonIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MoonIcon as Moon };
