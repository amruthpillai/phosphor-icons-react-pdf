import { EarSlashIcon as EarSlashBoldIcon } from "../bold/EarSlash";
import { EarSlashIcon as EarSlashDuotoneIcon } from "../duotone/EarSlash";
import { EarSlashIcon as EarSlashFillIcon } from "../fill/EarSlash";
import { EarSlashIcon as EarSlashLightIcon } from "../light/EarSlash";
import { EarSlashIcon as EarSlashRegularIcon } from "../regular/EarSlash";
import { EarSlashIcon as EarSlashThinIcon } from "../thin/EarSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EarSlashThinIcon,
	light: EarSlashLightIcon,
	regular: EarSlashRegularIcon,
	bold: EarSlashBoldIcon,
	fill: EarSlashFillIcon,
	duotone: EarSlashDuotoneIcon,
} as const;

export function EarSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EarSlashIcon as EarSlash };
