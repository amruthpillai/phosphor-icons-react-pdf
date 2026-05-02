import { ShieldChevronIcon as ShieldChevronBoldIcon } from "../bold/ShieldChevron";
import { ShieldChevronIcon as ShieldChevronDuotoneIcon } from "../duotone/ShieldChevron";
import { ShieldChevronIcon as ShieldChevronFillIcon } from "../fill/ShieldChevron";
import { ShieldChevronIcon as ShieldChevronLightIcon } from "../light/ShieldChevron";
import { ShieldChevronIcon as ShieldChevronRegularIcon } from "../regular/ShieldChevron";
import { ShieldChevronIcon as ShieldChevronThinIcon } from "../thin/ShieldChevron";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldChevronThinIcon,
	light: ShieldChevronLightIcon,
	regular: ShieldChevronRegularIcon,
	bold: ShieldChevronBoldIcon,
	fill: ShieldChevronFillIcon,
	duotone: ShieldChevronDuotoneIcon,
} as const;

export function ShieldChevronIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldChevronIcon as ShieldChevron };
