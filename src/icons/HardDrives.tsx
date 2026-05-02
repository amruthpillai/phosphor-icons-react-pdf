import { HardDrivesIcon as HardDrivesBoldIcon } from "../bold/HardDrives";
import { HardDrivesIcon as HardDrivesDuotoneIcon } from "../duotone/HardDrives";
import { HardDrivesIcon as HardDrivesFillIcon } from "../fill/HardDrives";
import { HardDrivesIcon as HardDrivesLightIcon } from "../light/HardDrives";
import { HardDrivesIcon as HardDrivesRegularIcon } from "../regular/HardDrives";
import { HardDrivesIcon as HardDrivesThinIcon } from "../thin/HardDrives";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HardDrivesThinIcon,
	light: HardDrivesLightIcon,
	regular: HardDrivesRegularIcon,
	bold: HardDrivesBoldIcon,
	fill: HardDrivesFillIcon,
	duotone: HardDrivesDuotoneIcon,
} as const;

export function HardDrivesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HardDrivesIcon as HardDrives };
