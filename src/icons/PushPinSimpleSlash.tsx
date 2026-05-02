import { PushPinSimpleSlashIcon as PushPinSimpleSlashBoldIcon } from "../bold/PushPinSimpleSlash";
import { PushPinSimpleSlashIcon as PushPinSimpleSlashDuotoneIcon } from "../duotone/PushPinSimpleSlash";
import { PushPinSimpleSlashIcon as PushPinSimpleSlashFillIcon } from "../fill/PushPinSimpleSlash";
import { PushPinSimpleSlashIcon as PushPinSimpleSlashLightIcon } from "../light/PushPinSimpleSlash";
import { PushPinSimpleSlashIcon as PushPinSimpleSlashRegularIcon } from "../regular/PushPinSimpleSlash";
import { PushPinSimpleSlashIcon as PushPinSimpleSlashThinIcon } from "../thin/PushPinSimpleSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PushPinSimpleSlashThinIcon,
	light: PushPinSimpleSlashLightIcon,
	regular: PushPinSimpleSlashRegularIcon,
	bold: PushPinSimpleSlashBoldIcon,
	fill: PushPinSimpleSlashFillIcon,
	duotone: PushPinSimpleSlashDuotoneIcon,
} as const;

export function PushPinSimpleSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PushPinSimpleSlashIcon as PushPinSimpleSlash };
