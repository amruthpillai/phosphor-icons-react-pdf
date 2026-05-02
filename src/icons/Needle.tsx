import { NeedleIcon as NeedleBoldIcon } from "../bold/Needle";
import { NeedleIcon as NeedleDuotoneIcon } from "../duotone/Needle";
import { NeedleIcon as NeedleFillIcon } from "../fill/Needle";
import { NeedleIcon as NeedleLightIcon } from "../light/Needle";
import { NeedleIcon as NeedleRegularIcon } from "../regular/Needle";
import { NeedleIcon as NeedleThinIcon } from "../thin/Needle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NeedleThinIcon,
	light: NeedleLightIcon,
	regular: NeedleRegularIcon,
	bold: NeedleBoldIcon,
	fill: NeedleFillIcon,
	duotone: NeedleDuotoneIcon,
} as const;

export function NeedleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NeedleIcon as Needle };
