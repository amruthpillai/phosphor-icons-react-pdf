import { FlipVerticalIcon as FlipVerticalBoldIcon } from "../bold/FlipVertical";
import { FlipVerticalIcon as FlipVerticalDuotoneIcon } from "../duotone/FlipVertical";
import { FlipVerticalIcon as FlipVerticalFillIcon } from "../fill/FlipVertical";
import { FlipVerticalIcon as FlipVerticalLightIcon } from "../light/FlipVertical";
import { FlipVerticalIcon as FlipVerticalRegularIcon } from "../regular/FlipVertical";
import { FlipVerticalIcon as FlipVerticalThinIcon } from "../thin/FlipVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlipVerticalThinIcon,
	light: FlipVerticalLightIcon,
	regular: FlipVerticalRegularIcon,
	bold: FlipVerticalBoldIcon,
	fill: FlipVerticalFillIcon,
	duotone: FlipVerticalDuotoneIcon,
} as const;

export function FlipVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlipVerticalIcon as FlipVertical };
