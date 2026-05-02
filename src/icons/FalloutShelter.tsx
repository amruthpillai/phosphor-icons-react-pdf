import { FalloutShelterIcon as FalloutShelterBoldIcon } from "../bold/FalloutShelter";
import { FalloutShelterIcon as FalloutShelterDuotoneIcon } from "../duotone/FalloutShelter";
import { FalloutShelterIcon as FalloutShelterFillIcon } from "../fill/FalloutShelter";
import { FalloutShelterIcon as FalloutShelterLightIcon } from "../light/FalloutShelter";
import { FalloutShelterIcon as FalloutShelterRegularIcon } from "../regular/FalloutShelter";
import { FalloutShelterIcon as FalloutShelterThinIcon } from "../thin/FalloutShelter";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FalloutShelterThinIcon,
	light: FalloutShelterLightIcon,
	regular: FalloutShelterRegularIcon,
	bold: FalloutShelterBoldIcon,
	fill: FalloutShelterFillIcon,
	duotone: FalloutShelterDuotoneIcon,
} as const;

export function FalloutShelterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FalloutShelterIcon as FalloutShelter };
