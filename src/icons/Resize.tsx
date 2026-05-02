import { ResizeIcon as ResizeBoldIcon } from "../bold/Resize";
import { ResizeIcon as ResizeDuotoneIcon } from "../duotone/Resize";
import { ResizeIcon as ResizeFillIcon } from "../fill/Resize";
import { ResizeIcon as ResizeLightIcon } from "../light/Resize";
import { ResizeIcon as ResizeRegularIcon } from "../regular/Resize";
import { ResizeIcon as ResizeThinIcon } from "../thin/Resize";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ResizeThinIcon,
	light: ResizeLightIcon,
	regular: ResizeRegularIcon,
	bold: ResizeBoldIcon,
	fill: ResizeFillIcon,
	duotone: ResizeDuotoneIcon,
} as const;

export function ResizeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ResizeIcon as Resize };
