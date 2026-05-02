import { CameraSlashIcon as CameraSlashBoldIcon } from "../bold/CameraSlash";
import { CameraSlashIcon as CameraSlashDuotoneIcon } from "../duotone/CameraSlash";
import { CameraSlashIcon as CameraSlashFillIcon } from "../fill/CameraSlash";
import { CameraSlashIcon as CameraSlashLightIcon } from "../light/CameraSlash";
import { CameraSlashIcon as CameraSlashRegularIcon } from "../regular/CameraSlash";
import { CameraSlashIcon as CameraSlashThinIcon } from "../thin/CameraSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CameraSlashThinIcon,
	light: CameraSlashLightIcon,
	regular: CameraSlashRegularIcon,
	bold: CameraSlashBoldIcon,
	fill: CameraSlashFillIcon,
	duotone: CameraSlashDuotoneIcon,
} as const;

export function CameraSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CameraSlashIcon as CameraSlash };
