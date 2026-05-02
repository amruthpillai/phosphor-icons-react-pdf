import { ChampagneIcon as ChampagneBoldIcon } from "../bold/Champagne";
import { ChampagneIcon as ChampagneDuotoneIcon } from "../duotone/Champagne";
import { ChampagneIcon as ChampagneFillIcon } from "../fill/Champagne";
import { ChampagneIcon as ChampagneLightIcon } from "../light/Champagne";
import { ChampagneIcon as ChampagneRegularIcon } from "../regular/Champagne";
import { ChampagneIcon as ChampagneThinIcon } from "../thin/Champagne";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChampagneThinIcon,
	light: ChampagneLightIcon,
	regular: ChampagneRegularIcon,
	bold: ChampagneBoldIcon,
	fill: ChampagneFillIcon,
	duotone: ChampagneDuotoneIcon,
} as const;

export function ChampagneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChampagneIcon as Champagne };
