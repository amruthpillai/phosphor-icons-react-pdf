import { UmbrellaSimpleIcon as UmbrellaSimpleBoldIcon } from "../bold/UmbrellaSimple";
import { UmbrellaSimpleIcon as UmbrellaSimpleDuotoneIcon } from "../duotone/UmbrellaSimple";
import { UmbrellaSimpleIcon as UmbrellaSimpleFillIcon } from "../fill/UmbrellaSimple";
import { UmbrellaSimpleIcon as UmbrellaSimpleLightIcon } from "../light/UmbrellaSimple";
import { UmbrellaSimpleIcon as UmbrellaSimpleRegularIcon } from "../regular/UmbrellaSimple";
import { UmbrellaSimpleIcon as UmbrellaSimpleThinIcon } from "../thin/UmbrellaSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UmbrellaSimpleThinIcon,
	light: UmbrellaSimpleLightIcon,
	regular: UmbrellaSimpleRegularIcon,
	bold: UmbrellaSimpleBoldIcon,
	fill: UmbrellaSimpleFillIcon,
	duotone: UmbrellaSimpleDuotoneIcon,
} as const;

export function UmbrellaSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UmbrellaSimpleIcon as UmbrellaSimple };
