import { PhoneSlashIcon as PhoneSlashBoldIcon } from "../bold/PhoneSlash";
import { PhoneSlashIcon as PhoneSlashDuotoneIcon } from "../duotone/PhoneSlash";
import { PhoneSlashIcon as PhoneSlashFillIcon } from "../fill/PhoneSlash";
import { PhoneSlashIcon as PhoneSlashLightIcon } from "../light/PhoneSlash";
import { PhoneSlashIcon as PhoneSlashRegularIcon } from "../regular/PhoneSlash";
import { PhoneSlashIcon as PhoneSlashThinIcon } from "../thin/PhoneSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneSlashThinIcon,
	light: PhoneSlashLightIcon,
	regular: PhoneSlashRegularIcon,
	bold: PhoneSlashBoldIcon,
	fill: PhoneSlashFillIcon,
	duotone: PhoneSlashDuotoneIcon,
} as const;

export function PhoneSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneSlashIcon as PhoneSlash };
