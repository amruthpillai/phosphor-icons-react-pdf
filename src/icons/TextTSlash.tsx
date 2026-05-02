import { TextTSlashIcon as TextTSlashBoldIcon } from "../bold/TextTSlash";
import { TextTSlashIcon as TextTSlashDuotoneIcon } from "../duotone/TextTSlash";
import { TextTSlashIcon as TextTSlashFillIcon } from "../fill/TextTSlash";
import { TextTSlashIcon as TextTSlashLightIcon } from "../light/TextTSlash";
import { TextTSlashIcon as TextTSlashRegularIcon } from "../regular/TextTSlash";
import { TextTSlashIcon as TextTSlashThinIcon } from "../thin/TextTSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TextTSlashThinIcon,
	light: TextTSlashLightIcon,
	regular: TextTSlashRegularIcon,
	bold: TextTSlashBoldIcon,
	fill: TextTSlashFillIcon,
	duotone: TextTSlashDuotoneIcon,
} as const;

export function TextTSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TextTSlashIcon as TextTSlash };
