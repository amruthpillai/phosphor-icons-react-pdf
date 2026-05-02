import { CowboyHatIcon as CowboyHatBoldIcon } from "../bold/CowboyHat";
import { CowboyHatIcon as CowboyHatDuotoneIcon } from "../duotone/CowboyHat";
import { CowboyHatIcon as CowboyHatFillIcon } from "../fill/CowboyHat";
import { CowboyHatIcon as CowboyHatLightIcon } from "../light/CowboyHat";
import { CowboyHatIcon as CowboyHatRegularIcon } from "../regular/CowboyHat";
import { CowboyHatIcon as CowboyHatThinIcon } from "../thin/CowboyHat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CowboyHatThinIcon,
	light: CowboyHatLightIcon,
	regular: CowboyHatRegularIcon,
	bold: CowboyHatBoldIcon,
	fill: CowboyHatFillIcon,
	duotone: CowboyHatDuotoneIcon,
} as const;

export function CowboyHatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CowboyHatIcon as CowboyHat };
