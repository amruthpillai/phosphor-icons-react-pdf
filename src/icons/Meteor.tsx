import { MeteorIcon as MeteorBoldIcon } from "../bold/Meteor";
import { MeteorIcon as MeteorDuotoneIcon } from "../duotone/Meteor";
import { MeteorIcon as MeteorFillIcon } from "../fill/Meteor";
import { MeteorIcon as MeteorLightIcon } from "../light/Meteor";
import { MeteorIcon as MeteorRegularIcon } from "../regular/Meteor";
import { MeteorIcon as MeteorThinIcon } from "../thin/Meteor";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MeteorThinIcon,
	light: MeteorLightIcon,
	regular: MeteorRegularIcon,
	bold: MeteorBoldIcon,
	fill: MeteorFillIcon,
	duotone: MeteorDuotoneIcon,
} as const;

export function MeteorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MeteorIcon as Meteor };
