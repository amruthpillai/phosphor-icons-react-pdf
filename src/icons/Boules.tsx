import { BoulesIcon as BoulesBoldIcon } from "../bold/Boules";
import { BoulesIcon as BoulesDuotoneIcon } from "../duotone/Boules";
import { BoulesIcon as BoulesFillIcon } from "../fill/Boules";
import { BoulesIcon as BoulesLightIcon } from "../light/Boules";
import { BoulesIcon as BoulesRegularIcon } from "../regular/Boules";
import { BoulesIcon as BoulesThinIcon } from "../thin/Boules";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoulesThinIcon,
	light: BoulesLightIcon,
	regular: BoulesRegularIcon,
	bold: BoulesBoldIcon,
	fill: BoulesFillIcon,
	duotone: BoulesDuotoneIcon,
} as const;

export function BoulesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoulesIcon as Boules };
