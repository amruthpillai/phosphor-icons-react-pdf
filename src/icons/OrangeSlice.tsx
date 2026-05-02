import { OrangeSliceIcon as OrangeSliceBoldIcon } from "../bold/OrangeSlice";
import { OrangeSliceIcon as OrangeSliceDuotoneIcon } from "../duotone/OrangeSlice";
import { OrangeSliceIcon as OrangeSliceFillIcon } from "../fill/OrangeSlice";
import { OrangeSliceIcon as OrangeSliceLightIcon } from "../light/OrangeSlice";
import { OrangeSliceIcon as OrangeSliceRegularIcon } from "../regular/OrangeSlice";
import { OrangeSliceIcon as OrangeSliceThinIcon } from "../thin/OrangeSlice";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OrangeSliceThinIcon,
	light: OrangeSliceLightIcon,
	regular: OrangeSliceRegularIcon,
	bold: OrangeSliceBoldIcon,
	fill: OrangeSliceFillIcon,
	duotone: OrangeSliceDuotoneIcon,
} as const;

export function OrangeSliceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OrangeSliceIcon as OrangeSlice };
