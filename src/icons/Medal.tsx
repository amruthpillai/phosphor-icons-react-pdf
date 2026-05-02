import { MedalIcon as MedalBoldIcon } from "../bold/Medal";
import { MedalIcon as MedalDuotoneIcon } from "../duotone/Medal";
import { MedalIcon as MedalFillIcon } from "../fill/Medal";
import { MedalIcon as MedalLightIcon } from "../light/Medal";
import { MedalIcon as MedalRegularIcon } from "../regular/Medal";
import { MedalIcon as MedalThinIcon } from "../thin/Medal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MedalThinIcon,
	light: MedalLightIcon,
	regular: MedalRegularIcon,
	bold: MedalBoldIcon,
	fill: MedalFillIcon,
	duotone: MedalDuotoneIcon,
} as const;

export function MedalIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MedalIcon as Medal };
