import { LegoSmileyIcon as LegoSmileyBoldIcon } from "../bold/LegoSmiley";
import { LegoSmileyIcon as LegoSmileyDuotoneIcon } from "../duotone/LegoSmiley";
import { LegoSmileyIcon as LegoSmileyFillIcon } from "../fill/LegoSmiley";
import { LegoSmileyIcon as LegoSmileyLightIcon } from "../light/LegoSmiley";
import { LegoSmileyIcon as LegoSmileyRegularIcon } from "../regular/LegoSmiley";
import { LegoSmileyIcon as LegoSmileyThinIcon } from "../thin/LegoSmiley";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LegoSmileyThinIcon,
	light: LegoSmileyLightIcon,
	regular: LegoSmileyRegularIcon,
	bold: LegoSmileyBoldIcon,
	fill: LegoSmileyFillIcon,
	duotone: LegoSmileyDuotoneIcon,
} as const;

export function LegoSmileyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LegoSmileyIcon as LegoSmiley };
