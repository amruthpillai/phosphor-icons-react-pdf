import { HardDriveIcon as HardDriveBoldIcon } from "../bold/HardDrive";
import { HardDriveIcon as HardDriveDuotoneIcon } from "../duotone/HardDrive";
import { HardDriveIcon as HardDriveFillIcon } from "../fill/HardDrive";
import { HardDriveIcon as HardDriveLightIcon } from "../light/HardDrive";
import { HardDriveIcon as HardDriveRegularIcon } from "../regular/HardDrive";
import { HardDriveIcon as HardDriveThinIcon } from "../thin/HardDrive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HardDriveThinIcon,
	light: HardDriveLightIcon,
	regular: HardDriveRegularIcon,
	bold: HardDriveBoldIcon,
	fill: HardDriveFillIcon,
	duotone: HardDriveDuotoneIcon,
} as const;

export function HardDriveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HardDriveIcon as HardDrive };
