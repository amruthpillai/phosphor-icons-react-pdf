import { GenderNeuterIcon as GenderNeuterBoldIcon } from "../bold/GenderNeuter";
import { GenderNeuterIcon as GenderNeuterDuotoneIcon } from "../duotone/GenderNeuter";
import { GenderNeuterIcon as GenderNeuterFillIcon } from "../fill/GenderNeuter";
import { GenderNeuterIcon as GenderNeuterLightIcon } from "../light/GenderNeuter";
import { GenderNeuterIcon as GenderNeuterRegularIcon } from "../regular/GenderNeuter";
import { GenderNeuterIcon as GenderNeuterThinIcon } from "../thin/GenderNeuter";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GenderNeuterThinIcon,
	light: GenderNeuterLightIcon,
	regular: GenderNeuterRegularIcon,
	bold: GenderNeuterBoldIcon,
	fill: GenderNeuterFillIcon,
	duotone: GenderNeuterDuotoneIcon,
} as const;

export function GenderNeuterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GenderNeuterIcon as GenderNeuter };
