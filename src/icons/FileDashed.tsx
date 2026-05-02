import { FileDashedIcon as FileDashedBoldIcon } from "../bold/FileDashed";
import { FileDashedIcon as FileDashedDuotoneIcon } from "../duotone/FileDashed";
import { FileDashedIcon as FileDashedFillIcon } from "../fill/FileDashed";
import { FileDashedIcon as FileDashedLightIcon } from "../light/FileDashed";
import { FileDashedIcon as FileDashedRegularIcon } from "../regular/FileDashed";
import { FileDashedIcon as FileDashedThinIcon } from "../thin/FileDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileDashedThinIcon,
	light: FileDashedLightIcon,
	regular: FileDashedRegularIcon,
	bold: FileDashedBoldIcon,
	fill: FileDashedFillIcon,
	duotone: FileDashedDuotoneIcon,
} as const;

export function FileDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileDashedIcon as FileDashed };
