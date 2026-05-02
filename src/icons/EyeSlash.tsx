import { EyeSlashIcon as EyeSlashBoldIcon } from "../bold/EyeSlash";
import { EyeSlashIcon as EyeSlashDuotoneIcon } from "../duotone/EyeSlash";
import { EyeSlashIcon as EyeSlashFillIcon } from "../fill/EyeSlash";
import { EyeSlashIcon as EyeSlashLightIcon } from "../light/EyeSlash";
import { EyeSlashIcon as EyeSlashRegularIcon } from "../regular/EyeSlash";
import { EyeSlashIcon as EyeSlashThinIcon } from "../thin/EyeSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyeSlashThinIcon,
	light: EyeSlashLightIcon,
	regular: EyeSlashRegularIcon,
	bold: EyeSlashBoldIcon,
	fill: EyeSlashFillIcon,
	duotone: EyeSlashDuotoneIcon,
} as const;

export function EyeSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyeSlashIcon as EyeSlash };
