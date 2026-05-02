import { BiohazardIcon as BiohazardBoldIcon } from "../bold/Biohazard";
import { BiohazardIcon as BiohazardDuotoneIcon } from "../duotone/Biohazard";
import { BiohazardIcon as BiohazardFillIcon } from "../fill/Biohazard";
import { BiohazardIcon as BiohazardLightIcon } from "../light/Biohazard";
import { BiohazardIcon as BiohazardRegularIcon } from "../regular/Biohazard";
import { BiohazardIcon as BiohazardThinIcon } from "../thin/Biohazard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BiohazardThinIcon,
	light: BiohazardLightIcon,
	regular: BiohazardRegularIcon,
	bold: BiohazardBoldIcon,
	fill: BiohazardFillIcon,
	duotone: BiohazardDuotoneIcon,
} as const;

export function BiohazardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BiohazardIcon as Biohazard };
