import { OnigiriIcon as OnigiriBoldIcon } from "../bold/Onigiri";
import { OnigiriIcon as OnigiriDuotoneIcon } from "../duotone/Onigiri";
import { OnigiriIcon as OnigiriFillIcon } from "../fill/Onigiri";
import { OnigiriIcon as OnigiriLightIcon } from "../light/Onigiri";
import { OnigiriIcon as OnigiriRegularIcon } from "../regular/Onigiri";
import { OnigiriIcon as OnigiriThinIcon } from "../thin/Onigiri";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OnigiriThinIcon,
	light: OnigiriLightIcon,
	regular: OnigiriRegularIcon,
	bold: OnigiriBoldIcon,
	fill: OnigiriFillIcon,
	duotone: OnigiriDuotoneIcon,
} as const;

export function OnigiriIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OnigiriIcon as Onigiri };
