import { FileSvgIcon as FileSvgBoldIcon } from "../bold/FileSvg";
import { FileSvgIcon as FileSvgDuotoneIcon } from "../duotone/FileSvg";
import { FileSvgIcon as FileSvgFillIcon } from "../fill/FileSvg";
import { FileSvgIcon as FileSvgLightIcon } from "../light/FileSvg";
import { FileSvgIcon as FileSvgRegularIcon } from "../regular/FileSvg";
import { FileSvgIcon as FileSvgThinIcon } from "../thin/FileSvg";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileSvgThinIcon,
	light: FileSvgLightIcon,
	regular: FileSvgRegularIcon,
	bold: FileSvgBoldIcon,
	fill: FileSvgFillIcon,
	duotone: FileSvgDuotoneIcon,
} as const;

export function FileSvgIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileSvgIcon as FileSvg };
