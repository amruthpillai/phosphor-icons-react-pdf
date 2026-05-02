import { FileMdIcon as FileMdBoldIcon } from "../bold/FileMd";
import { FileMdIcon as FileMdDuotoneIcon } from "../duotone/FileMd";
import { FileMdIcon as FileMdFillIcon } from "../fill/FileMd";
import { FileMdIcon as FileMdLightIcon } from "../light/FileMd";
import { FileMdIcon as FileMdRegularIcon } from "../regular/FileMd";
import { FileMdIcon as FileMdThinIcon } from "../thin/FileMd";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileMdThinIcon,
	light: FileMdLightIcon,
	regular: FileMdRegularIcon,
	bold: FileMdBoldIcon,
	fill: FileMdFillIcon,
	duotone: FileMdDuotoneIcon,
} as const;

export function FileMdIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileMdIcon as FileMd };
