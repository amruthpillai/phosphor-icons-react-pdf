import { BoatIcon as BoatBoldIcon } from "../bold/Boat";
import { BoatIcon as BoatDuotoneIcon } from "../duotone/Boat";
import { BoatIcon as BoatFillIcon } from "../fill/Boat";
import { BoatIcon as BoatLightIcon } from "../light/Boat";
import { BoatIcon as BoatRegularIcon } from "../regular/Boat";
import { BoatIcon as BoatThinIcon } from "../thin/Boat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoatThinIcon,
	light: BoatLightIcon,
	regular: BoatRegularIcon,
	bold: BoatBoldIcon,
	fill: BoatFillIcon,
	duotone: BoatDuotoneIcon,
} as const;

export function BoatIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoatIcon as Boat };
