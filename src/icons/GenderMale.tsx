import { GenderMaleIcon as GenderMaleBoldIcon } from "../bold/GenderMale";
import { GenderMaleIcon as GenderMaleDuotoneIcon } from "../duotone/GenderMale";
import { GenderMaleIcon as GenderMaleFillIcon } from "../fill/GenderMale";
import { GenderMaleIcon as GenderMaleLightIcon } from "../light/GenderMale";
import { GenderMaleIcon as GenderMaleRegularIcon } from "../regular/GenderMale";
import { GenderMaleIcon as GenderMaleThinIcon } from "../thin/GenderMale";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GenderMaleThinIcon,
	light: GenderMaleLightIcon,
	regular: GenderMaleRegularIcon,
	bold: GenderMaleBoldIcon,
	fill: GenderMaleFillIcon,
	duotone: GenderMaleDuotoneIcon,
} as const;

export function GenderMaleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GenderMaleIcon as GenderMale };
