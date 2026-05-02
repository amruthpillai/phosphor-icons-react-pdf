import { FinnTheHumanIcon as FinnTheHumanBoldIcon } from "../bold/FinnTheHuman";
import { FinnTheHumanIcon as FinnTheHumanDuotoneIcon } from "../duotone/FinnTheHuman";
import { FinnTheHumanIcon as FinnTheHumanFillIcon } from "../fill/FinnTheHuman";
import { FinnTheHumanIcon as FinnTheHumanLightIcon } from "../light/FinnTheHuman";
import { FinnTheHumanIcon as FinnTheHumanRegularIcon } from "../regular/FinnTheHuman";
import { FinnTheHumanIcon as FinnTheHumanThinIcon } from "../thin/FinnTheHuman";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FinnTheHumanThinIcon,
	light: FinnTheHumanLightIcon,
	regular: FinnTheHumanRegularIcon,
	bold: FinnTheHumanBoldIcon,
	fill: FinnTheHumanFillIcon,
	duotone: FinnTheHumanDuotoneIcon,
} as const;

export function FinnTheHumanIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FinnTheHumanIcon as FinnTheHuman };
