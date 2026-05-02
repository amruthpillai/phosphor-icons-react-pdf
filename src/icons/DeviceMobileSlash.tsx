import { DeviceMobileSlashIcon as DeviceMobileSlashBoldIcon } from "../bold/DeviceMobileSlash";
import { DeviceMobileSlashIcon as DeviceMobileSlashDuotoneIcon } from "../duotone/DeviceMobileSlash";
import { DeviceMobileSlashIcon as DeviceMobileSlashFillIcon } from "../fill/DeviceMobileSlash";
import { DeviceMobileSlashIcon as DeviceMobileSlashLightIcon } from "../light/DeviceMobileSlash";
import { DeviceMobileSlashIcon as DeviceMobileSlashRegularIcon } from "../regular/DeviceMobileSlash";
import { DeviceMobileSlashIcon as DeviceMobileSlashThinIcon } from "../thin/DeviceMobileSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceMobileSlashThinIcon,
	light: DeviceMobileSlashLightIcon,
	regular: DeviceMobileSlashRegularIcon,
	bold: DeviceMobileSlashBoldIcon,
	fill: DeviceMobileSlashFillIcon,
	duotone: DeviceMobileSlashDuotoneIcon,
} as const;

export function DeviceMobileSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceMobileSlashIcon as DeviceMobileSlash };
