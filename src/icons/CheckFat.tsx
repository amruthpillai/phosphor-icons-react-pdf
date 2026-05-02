import { CheckFatIcon as CheckFatBoldIcon } from "../bold/CheckFat";
import { CheckFatIcon as CheckFatDuotoneIcon } from "../duotone/CheckFat";
import { CheckFatIcon as CheckFatFillIcon } from "../fill/CheckFat";
import { CheckFatIcon as CheckFatLightIcon } from "../light/CheckFat";
import { CheckFatIcon as CheckFatRegularIcon } from "../regular/CheckFat";
import { CheckFatIcon as CheckFatThinIcon } from "../thin/CheckFat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheckFatThinIcon,
	light: CheckFatLightIcon,
	regular: CheckFatRegularIcon,
	bold: CheckFatBoldIcon,
	fill: CheckFatFillIcon,
	duotone: CheckFatDuotoneIcon,
} as const;

export function CheckFatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheckFatIcon as CheckFat };
