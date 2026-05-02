import { FishSimpleIcon as FishSimpleBoldIcon } from "../bold/FishSimple";
import { FishSimpleIcon as FishSimpleDuotoneIcon } from "../duotone/FishSimple";
import { FishSimpleIcon as FishSimpleFillIcon } from "../fill/FishSimple";
import { FishSimpleIcon as FishSimpleLightIcon } from "../light/FishSimple";
import { FishSimpleIcon as FishSimpleRegularIcon } from "../regular/FishSimple";
import { FishSimpleIcon as FishSimpleThinIcon } from "../thin/FishSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FishSimpleThinIcon,
	light: FishSimpleLightIcon,
	regular: FishSimpleRegularIcon,
	bold: FishSimpleBoldIcon,
	fill: FishSimpleFillIcon,
	duotone: FishSimpleDuotoneIcon,
} as const;

export function FishSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FishSimpleIcon as FishSimple };
