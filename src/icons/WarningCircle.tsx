import { WarningCircleIcon as WarningCircleBoldIcon } from "../bold/WarningCircle";
import { WarningCircleIcon as WarningCircleDuotoneIcon } from "../duotone/WarningCircle";
import { WarningCircleIcon as WarningCircleFillIcon } from "../fill/WarningCircle";
import { WarningCircleIcon as WarningCircleLightIcon } from "../light/WarningCircle";
import { WarningCircleIcon as WarningCircleRegularIcon } from "../regular/WarningCircle";
import { WarningCircleIcon as WarningCircleThinIcon } from "../thin/WarningCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WarningCircleThinIcon,
	light: WarningCircleLightIcon,
	regular: WarningCircleRegularIcon,
	bold: WarningCircleBoldIcon,
	fill: WarningCircleFillIcon,
	duotone: WarningCircleDuotoneIcon,
} as const;

export function WarningCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WarningCircleIcon as WarningCircle };
