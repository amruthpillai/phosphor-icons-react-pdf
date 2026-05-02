import { FloppyDiskIcon as FloppyDiskBoldIcon } from "../bold/FloppyDisk";
import { FloppyDiskIcon as FloppyDiskDuotoneIcon } from "../duotone/FloppyDisk";
import { FloppyDiskIcon as FloppyDiskFillIcon } from "../fill/FloppyDisk";
import { FloppyDiskIcon as FloppyDiskLightIcon } from "../light/FloppyDisk";
import { FloppyDiskIcon as FloppyDiskRegularIcon } from "../regular/FloppyDisk";
import { FloppyDiskIcon as FloppyDiskThinIcon } from "../thin/FloppyDisk";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FloppyDiskThinIcon,
	light: FloppyDiskLightIcon,
	regular: FloppyDiskRegularIcon,
	bold: FloppyDiskBoldIcon,
	fill: FloppyDiskFillIcon,
	duotone: FloppyDiskDuotoneIcon,
} as const;

export function FloppyDiskIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FloppyDiskIcon as FloppyDisk };
