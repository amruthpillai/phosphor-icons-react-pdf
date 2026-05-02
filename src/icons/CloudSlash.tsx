import { CloudSlashIcon as CloudSlashBoldIcon } from "../bold/CloudSlash";
import { CloudSlashIcon as CloudSlashDuotoneIcon } from "../duotone/CloudSlash";
import { CloudSlashIcon as CloudSlashFillIcon } from "../fill/CloudSlash";
import { CloudSlashIcon as CloudSlashLightIcon } from "../light/CloudSlash";
import { CloudSlashIcon as CloudSlashRegularIcon } from "../regular/CloudSlash";
import { CloudSlashIcon as CloudSlashThinIcon } from "../thin/CloudSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudSlashThinIcon,
	light: CloudSlashLightIcon,
	regular: CloudSlashRegularIcon,
	bold: CloudSlashBoldIcon,
	fill: CloudSlashFillIcon,
	duotone: CloudSlashDuotoneIcon,
} as const;

export function CloudSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudSlashIcon as CloudSlash };
