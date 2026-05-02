import { AlignCenterHorizontalIcon as AlignCenterHorizontalBoldIcon } from "../bold/AlignCenterHorizontal";
import { AlignCenterHorizontalIcon as AlignCenterHorizontalDuotoneIcon } from "../duotone/AlignCenterHorizontal";
import { AlignCenterHorizontalIcon as AlignCenterHorizontalFillIcon } from "../fill/AlignCenterHorizontal";
import { AlignCenterHorizontalIcon as AlignCenterHorizontalLightIcon } from "../light/AlignCenterHorizontal";
import { AlignCenterHorizontalIcon as AlignCenterHorizontalRegularIcon } from "../regular/AlignCenterHorizontal";
import { AlignCenterHorizontalIcon as AlignCenterHorizontalThinIcon } from "../thin/AlignCenterHorizontal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignCenterHorizontalThinIcon,
	light: AlignCenterHorizontalLightIcon,
	regular: AlignCenterHorizontalRegularIcon,
	bold: AlignCenterHorizontalBoldIcon,
	fill: AlignCenterHorizontalFillIcon,
	duotone: AlignCenterHorizontalDuotoneIcon,
} as const;

export function AlignCenterHorizontalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignCenterHorizontalIcon as AlignCenterHorizontal };
