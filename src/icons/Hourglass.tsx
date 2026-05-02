import { HourglassIcon as HourglassBoldIcon } from "../bold/Hourglass";
import { HourglassIcon as HourglassDuotoneIcon } from "../duotone/Hourglass";
import { HourglassIcon as HourglassFillIcon } from "../fill/Hourglass";
import { HourglassIcon as HourglassLightIcon } from "../light/Hourglass";
import { HourglassIcon as HourglassRegularIcon } from "../regular/Hourglass";
import { HourglassIcon as HourglassThinIcon } from "../thin/Hourglass";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassThinIcon,
	light: HourglassLightIcon,
	regular: HourglassRegularIcon,
	bold: HourglassBoldIcon,
	fill: HourglassFillIcon,
	duotone: HourglassDuotoneIcon,
} as const;

export function HourglassIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassIcon as Hourglass };
