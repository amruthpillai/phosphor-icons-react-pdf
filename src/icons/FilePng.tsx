import { FilePngIcon as FilePngBoldIcon } from "../bold/FilePng";
import { FilePngIcon as FilePngDuotoneIcon } from "../duotone/FilePng";
import { FilePngIcon as FilePngFillIcon } from "../fill/FilePng";
import { FilePngIcon as FilePngLightIcon } from "../light/FilePng";
import { FilePngIcon as FilePngRegularIcon } from "../regular/FilePng";
import { FilePngIcon as FilePngThinIcon } from "../thin/FilePng";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FilePngThinIcon,
	light: FilePngLightIcon,
	regular: FilePngRegularIcon,
	bold: FilePngBoldIcon,
	fill: FilePngFillIcon,
	duotone: FilePngDuotoneIcon,
} as const;

export function FilePngIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FilePngIcon as FilePng };
