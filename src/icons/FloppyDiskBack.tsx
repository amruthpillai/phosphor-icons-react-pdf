import { FloppyDiskBackIcon as FloppyDiskBackBoldIcon } from "../bold/FloppyDiskBack";
import { FloppyDiskBackIcon as FloppyDiskBackDuotoneIcon } from "../duotone/FloppyDiskBack";
import { FloppyDiskBackIcon as FloppyDiskBackFillIcon } from "../fill/FloppyDiskBack";
import { FloppyDiskBackIcon as FloppyDiskBackLightIcon } from "../light/FloppyDiskBack";
import { FloppyDiskBackIcon as FloppyDiskBackRegularIcon } from "../regular/FloppyDiskBack";
import { FloppyDiskBackIcon as FloppyDiskBackThinIcon } from "../thin/FloppyDiskBack";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FloppyDiskBackThinIcon,
	light: FloppyDiskBackLightIcon,
	regular: FloppyDiskBackRegularIcon,
	bold: FloppyDiskBackBoldIcon,
	fill: FloppyDiskBackFillIcon,
	duotone: FloppyDiskBackDuotoneIcon,
} as const;

export function FloppyDiskBackIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FloppyDiskBackIcon as FloppyDiskBack };
