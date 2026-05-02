import { FileCppIcon as FileCppBoldIcon } from "../bold/FileCpp";
import { FileCppIcon as FileCppDuotoneIcon } from "../duotone/FileCpp";
import { FileCppIcon as FileCppFillIcon } from "../fill/FileCpp";
import { FileCppIcon as FileCppLightIcon } from "../light/FileCpp";
import { FileCppIcon as FileCppRegularIcon } from "../regular/FileCpp";
import { FileCppIcon as FileCppThinIcon } from "../thin/FileCpp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCppThinIcon,
	light: FileCppLightIcon,
	regular: FileCppRegularIcon,
	bold: FileCppBoldIcon,
	fill: FileCppFillIcon,
	duotone: FileCppDuotoneIcon,
} as const;

export function FileCppIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCppIcon as FileCpp };
