import { PushPinSimpleIcon as PushPinSimpleBoldIcon } from "../bold/PushPinSimple";
import { PushPinSimpleIcon as PushPinSimpleDuotoneIcon } from "../duotone/PushPinSimple";
import { PushPinSimpleIcon as PushPinSimpleFillIcon } from "../fill/PushPinSimple";
import { PushPinSimpleIcon as PushPinSimpleLightIcon } from "../light/PushPinSimple";
import { PushPinSimpleIcon as PushPinSimpleRegularIcon } from "../regular/PushPinSimple";
import { PushPinSimpleIcon as PushPinSimpleThinIcon } from "../thin/PushPinSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PushPinSimpleThinIcon,
	light: PushPinSimpleLightIcon,
	regular: PushPinSimpleRegularIcon,
	bold: PushPinSimpleBoldIcon,
	fill: PushPinSimpleFillIcon,
	duotone: PushPinSimpleDuotoneIcon,
} as const;

export function PushPinSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PushPinSimpleIcon as PushPinSimple };
