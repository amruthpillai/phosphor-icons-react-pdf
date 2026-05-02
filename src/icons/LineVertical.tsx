import { LineVerticalIcon as LineVerticalBoldIcon } from "../bold/LineVertical";
import { LineVerticalIcon as LineVerticalDuotoneIcon } from "../duotone/LineVertical";
import { LineVerticalIcon as LineVerticalFillIcon } from "../fill/LineVertical";
import { LineVerticalIcon as LineVerticalLightIcon } from "../light/LineVertical";
import { LineVerticalIcon as LineVerticalRegularIcon } from "../regular/LineVertical";
import { LineVerticalIcon as LineVerticalThinIcon } from "../thin/LineVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LineVerticalThinIcon,
	light: LineVerticalLightIcon,
	regular: LineVerticalRegularIcon,
	bold: LineVerticalBoldIcon,
	fill: LineVerticalFillIcon,
	duotone: LineVerticalDuotoneIcon,
} as const;

export function LineVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LineVerticalIcon as LineVertical };
