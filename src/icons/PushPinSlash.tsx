import { PushPinSlashIcon as PushPinSlashBoldIcon } from "../bold/PushPinSlash";
import { PushPinSlashIcon as PushPinSlashDuotoneIcon } from "../duotone/PushPinSlash";
import { PushPinSlashIcon as PushPinSlashFillIcon } from "../fill/PushPinSlash";
import { PushPinSlashIcon as PushPinSlashLightIcon } from "../light/PushPinSlash";
import { PushPinSlashIcon as PushPinSlashRegularIcon } from "../regular/PushPinSlash";
import { PushPinSlashIcon as PushPinSlashThinIcon } from "../thin/PushPinSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PushPinSlashThinIcon,
	light: PushPinSlashLightIcon,
	regular: PushPinSlashRegularIcon,
	bold: PushPinSlashBoldIcon,
	fill: PushPinSlashFillIcon,
	duotone: PushPinSlashDuotoneIcon,
} as const;

export function PushPinSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PushPinSlashIcon as PushPinSlash };
