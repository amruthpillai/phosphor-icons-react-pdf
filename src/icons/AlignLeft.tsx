import { AlignLeftIcon as AlignLeftBoldIcon } from "../bold/AlignLeft";
import { AlignLeftIcon as AlignLeftDuotoneIcon } from "../duotone/AlignLeft";
import { AlignLeftIcon as AlignLeftFillIcon } from "../fill/AlignLeft";
import { AlignLeftIcon as AlignLeftLightIcon } from "../light/AlignLeft";
import { AlignLeftIcon as AlignLeftRegularIcon } from "../regular/AlignLeft";
import { AlignLeftIcon as AlignLeftThinIcon } from "../thin/AlignLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignLeftThinIcon,
	light: AlignLeftLightIcon,
	regular: AlignLeftRegularIcon,
	bold: AlignLeftBoldIcon,
	fill: AlignLeftFillIcon,
	duotone: AlignLeftDuotoneIcon,
} as const;

export function AlignLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignLeftIcon as AlignLeft };
