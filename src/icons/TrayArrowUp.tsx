import { TrayArrowUpIcon as TrayArrowUpBoldIcon } from "../bold/TrayArrowUp";
import { TrayArrowUpIcon as TrayArrowUpDuotoneIcon } from "../duotone/TrayArrowUp";
import { TrayArrowUpIcon as TrayArrowUpFillIcon } from "../fill/TrayArrowUp";
import { TrayArrowUpIcon as TrayArrowUpLightIcon } from "../light/TrayArrowUp";
import { TrayArrowUpIcon as TrayArrowUpRegularIcon } from "../regular/TrayArrowUp";
import { TrayArrowUpIcon as TrayArrowUpThinIcon } from "../thin/TrayArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrayArrowUpThinIcon,
	light: TrayArrowUpLightIcon,
	regular: TrayArrowUpRegularIcon,
	bold: TrayArrowUpBoldIcon,
	fill: TrayArrowUpFillIcon,
	duotone: TrayArrowUpDuotoneIcon,
} as const;

export function TrayArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrayArrowUpIcon as TrayArrowUp };
