import { FileLockIcon as FileLockBoldIcon } from "../bold/FileLock";
import { FileLockIcon as FileLockDuotoneIcon } from "../duotone/FileLock";
import { FileLockIcon as FileLockFillIcon } from "../fill/FileLock";
import { FileLockIcon as FileLockLightIcon } from "../light/FileLock";
import { FileLockIcon as FileLockRegularIcon } from "../regular/FileLock";
import { FileLockIcon as FileLockThinIcon } from "../thin/FileLock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileLockThinIcon,
	light: FileLockLightIcon,
	regular: FileLockRegularIcon,
	bold: FileLockBoldIcon,
	fill: FileLockFillIcon,
	duotone: FileLockDuotoneIcon,
} as const;

export function FileLockIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileLockIcon as FileLock };
