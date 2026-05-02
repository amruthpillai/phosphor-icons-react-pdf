import { FileTsxIcon as FileTsxBoldIcon } from "../bold/FileTsx";
import { FileTsxIcon as FileTsxDuotoneIcon } from "../duotone/FileTsx";
import { FileTsxIcon as FileTsxFillIcon } from "../fill/FileTsx";
import { FileTsxIcon as FileTsxLightIcon } from "../light/FileTsx";
import { FileTsxIcon as FileTsxRegularIcon } from "../regular/FileTsx";
import { FileTsxIcon as FileTsxThinIcon } from "../thin/FileTsx";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileTsxThinIcon,
	light: FileTsxLightIcon,
	regular: FileTsxRegularIcon,
	bold: FileTsxBoldIcon,
	fill: FileTsxFillIcon,
	duotone: FileTsxDuotoneIcon,
} as const;

export function FileTsxIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileTsxIcon as FileTsx };
