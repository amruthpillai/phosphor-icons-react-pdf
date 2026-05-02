import { MegaphoneIcon as MegaphoneBoldIcon } from "../bold/Megaphone";
import { MegaphoneIcon as MegaphoneDuotoneIcon } from "../duotone/Megaphone";
import { MegaphoneIcon as MegaphoneFillIcon } from "../fill/Megaphone";
import { MegaphoneIcon as MegaphoneLightIcon } from "../light/Megaphone";
import { MegaphoneIcon as MegaphoneRegularIcon } from "../regular/Megaphone";
import { MegaphoneIcon as MegaphoneThinIcon } from "../thin/Megaphone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MegaphoneThinIcon,
	light: MegaphoneLightIcon,
	regular: MegaphoneRegularIcon,
	bold: MegaphoneBoldIcon,
	fill: MegaphoneFillIcon,
	duotone: MegaphoneDuotoneIcon,
} as const;

export function MegaphoneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MegaphoneIcon as Megaphone };
