import { LightningSlashIcon as LightningSlashBoldIcon } from "../bold/LightningSlash";
import { LightningSlashIcon as LightningSlashDuotoneIcon } from "../duotone/LightningSlash";
import { LightningSlashIcon as LightningSlashFillIcon } from "../fill/LightningSlash";
import { LightningSlashIcon as LightningSlashLightIcon } from "../light/LightningSlash";
import { LightningSlashIcon as LightningSlashRegularIcon } from "../regular/LightningSlash";
import { LightningSlashIcon as LightningSlashThinIcon } from "../thin/LightningSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LightningSlashThinIcon,
	light: LightningSlashLightIcon,
	regular: LightningSlashRegularIcon,
	bold: LightningSlashBoldIcon,
	fill: LightningSlashFillIcon,
	duotone: LightningSlashDuotoneIcon,
} as const;

export function LightningSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LightningSlashIcon as LightningSlash };
