import { ShuffleSimpleIcon as ShuffleSimpleBoldIcon } from "../bold/ShuffleSimple";
import { ShuffleSimpleIcon as ShuffleSimpleDuotoneIcon } from "../duotone/ShuffleSimple";
import { ShuffleSimpleIcon as ShuffleSimpleFillIcon } from "../fill/ShuffleSimple";
import { ShuffleSimpleIcon as ShuffleSimpleLightIcon } from "../light/ShuffleSimple";
import { ShuffleSimpleIcon as ShuffleSimpleRegularIcon } from "../regular/ShuffleSimple";
import { ShuffleSimpleIcon as ShuffleSimpleThinIcon } from "../thin/ShuffleSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShuffleSimpleThinIcon,
	light: ShuffleSimpleLightIcon,
	regular: ShuffleSimpleRegularIcon,
	bold: ShuffleSimpleBoldIcon,
	fill: ShuffleSimpleFillIcon,
	duotone: ShuffleSimpleDuotoneIcon,
} as const;

export function ShuffleSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShuffleSimpleIcon as ShuffleSimple };
