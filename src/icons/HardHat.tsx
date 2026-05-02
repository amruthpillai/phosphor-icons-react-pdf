import { HardHatIcon as HardHatBoldIcon } from "../bold/HardHat";
import { HardHatIcon as HardHatDuotoneIcon } from "../duotone/HardHat";
import { HardHatIcon as HardHatFillIcon } from "../fill/HardHat";
import { HardHatIcon as HardHatLightIcon } from "../light/HardHat";
import { HardHatIcon as HardHatRegularIcon } from "../regular/HardHat";
import { HardHatIcon as HardHatThinIcon } from "../thin/HardHat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HardHatThinIcon,
	light: HardHatLightIcon,
	regular: HardHatRegularIcon,
	bold: HardHatBoldIcon,
	fill: HardHatFillIcon,
	duotone: HardHatDuotoneIcon,
} as const;

export function HardHatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HardHatIcon as HardHat };
