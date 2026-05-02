import { FileRsIcon as FileRsBoldIcon } from "../bold/FileRs";
import { FileRsIcon as FileRsDuotoneIcon } from "../duotone/FileRs";
import { FileRsIcon as FileRsFillIcon } from "../fill/FileRs";
import { FileRsIcon as FileRsLightIcon } from "../light/FileRs";
import { FileRsIcon as FileRsRegularIcon } from "../regular/FileRs";
import { FileRsIcon as FileRsThinIcon } from "../thin/FileRs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileRsThinIcon,
	light: FileRsLightIcon,
	regular: FileRsRegularIcon,
	bold: FileRsBoldIcon,
	fill: FileRsFillIcon,
	duotone: FileRsDuotoneIcon,
} as const;

export function FileRsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileRsIcon as FileRs };
