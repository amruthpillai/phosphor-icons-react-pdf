import { EggCrackIcon as EggCrackBoldIcon } from "../bold/EggCrack";
import { EggCrackIcon as EggCrackDuotoneIcon } from "../duotone/EggCrack";
import { EggCrackIcon as EggCrackFillIcon } from "../fill/EggCrack";
import { EggCrackIcon as EggCrackLightIcon } from "../light/EggCrack";
import { EggCrackIcon as EggCrackRegularIcon } from "../regular/EggCrack";
import { EggCrackIcon as EggCrackThinIcon } from "../thin/EggCrack";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EggCrackThinIcon,
	light: EggCrackLightIcon,
	regular: EggCrackRegularIcon,
	bold: EggCrackBoldIcon,
	fill: EggCrackFillIcon,
	duotone: EggCrackDuotoneIcon,
} as const;

export function EggCrackIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EggCrackIcon as EggCrack };
