import { ArmchairIcon as ArmchairBoldIcon } from "../bold/Armchair";
import { ArmchairIcon as ArmchairDuotoneIcon } from "../duotone/Armchair";
import { ArmchairIcon as ArmchairFillIcon } from "../fill/Armchair";
import { ArmchairIcon as ArmchairLightIcon } from "../light/Armchair";
import { ArmchairIcon as ArmchairRegularIcon } from "../regular/Armchair";
import { ArmchairIcon as ArmchairThinIcon } from "../thin/Armchair";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArmchairThinIcon,
	light: ArmchairLightIcon,
	regular: ArmchairRegularIcon,
	bold: ArmchairBoldIcon,
	fill: ArmchairFillIcon,
	duotone: ArmchairDuotoneIcon,
} as const;

export function ArmchairIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArmchairIcon as Armchair };
