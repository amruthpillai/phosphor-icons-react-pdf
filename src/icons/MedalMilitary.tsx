import { MedalMilitaryIcon as MedalMilitaryBoldIcon } from "../bold/MedalMilitary";
import { MedalMilitaryIcon as MedalMilitaryDuotoneIcon } from "../duotone/MedalMilitary";
import { MedalMilitaryIcon as MedalMilitaryFillIcon } from "../fill/MedalMilitary";
import { MedalMilitaryIcon as MedalMilitaryLightIcon } from "../light/MedalMilitary";
import { MedalMilitaryIcon as MedalMilitaryRegularIcon } from "../regular/MedalMilitary";
import { MedalMilitaryIcon as MedalMilitaryThinIcon } from "../thin/MedalMilitary";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MedalMilitaryThinIcon,
	light: MedalMilitaryLightIcon,
	regular: MedalMilitaryRegularIcon,
	bold: MedalMilitaryBoldIcon,
	fill: MedalMilitaryFillIcon,
	duotone: MedalMilitaryDuotoneIcon,
} as const;

export function MedalMilitaryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MedalMilitaryIcon as MedalMilitary };
