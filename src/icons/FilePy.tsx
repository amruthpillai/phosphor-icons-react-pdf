import { FilePyIcon as FilePyBoldIcon } from "../bold/FilePy";
import { FilePyIcon as FilePyDuotoneIcon } from "../duotone/FilePy";
import { FilePyIcon as FilePyFillIcon } from "../fill/FilePy";
import { FilePyIcon as FilePyLightIcon } from "../light/FilePy";
import { FilePyIcon as FilePyRegularIcon } from "../regular/FilePy";
import { FilePyIcon as FilePyThinIcon } from "../thin/FilePy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilePyThinIcon,
	light: FilePyLightIcon,
	regular: FilePyRegularIcon,
	bold: FilePyBoldIcon,
	fill: FilePyFillIcon,
	duotone: FilePyDuotoneIcon,
} as const;

export function FilePyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilePyIcon as FilePy };
