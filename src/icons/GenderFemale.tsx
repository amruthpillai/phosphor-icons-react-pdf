import { GenderFemaleIcon as GenderFemaleBoldIcon } from "../bold/GenderFemale";
import { GenderFemaleIcon as GenderFemaleDuotoneIcon } from "../duotone/GenderFemale";
import { GenderFemaleIcon as GenderFemaleFillIcon } from "../fill/GenderFemale";
import { GenderFemaleIcon as GenderFemaleLightIcon } from "../light/GenderFemale";
import { GenderFemaleIcon as GenderFemaleRegularIcon } from "../regular/GenderFemale";
import { GenderFemaleIcon as GenderFemaleThinIcon } from "../thin/GenderFemale";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GenderFemaleThinIcon,
	light: GenderFemaleLightIcon,
	regular: GenderFemaleRegularIcon,
	bold: GenderFemaleBoldIcon,
	fill: GenderFemaleFillIcon,
	duotone: GenderFemaleDuotoneIcon,
} as const;

export function GenderFemaleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GenderFemaleIcon as GenderFemale };
