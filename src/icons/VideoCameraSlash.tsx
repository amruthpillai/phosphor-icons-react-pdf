import { VideoCameraSlashIcon as VideoCameraSlashBoldIcon } from "../bold/VideoCameraSlash";
import { VideoCameraSlashIcon as VideoCameraSlashDuotoneIcon } from "../duotone/VideoCameraSlash";
import { VideoCameraSlashIcon as VideoCameraSlashFillIcon } from "../fill/VideoCameraSlash";
import { VideoCameraSlashIcon as VideoCameraSlashLightIcon } from "../light/VideoCameraSlash";
import { VideoCameraSlashIcon as VideoCameraSlashRegularIcon } from "../regular/VideoCameraSlash";
import { VideoCameraSlashIcon as VideoCameraSlashThinIcon } from "../thin/VideoCameraSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VideoCameraSlashThinIcon,
	light: VideoCameraSlashLightIcon,
	regular: VideoCameraSlashRegularIcon,
	bold: VideoCameraSlashBoldIcon,
	fill: VideoCameraSlashFillIcon,
	duotone: VideoCameraSlashDuotoneIcon,
} as const;

export function VideoCameraSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VideoCameraSlashIcon as VideoCameraSlash };
