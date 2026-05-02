import { ShieldCheckeredIcon as ShieldCheckeredBoldIcon } from "../bold/ShieldCheckered";
import { ShieldCheckeredIcon as ShieldCheckeredDuotoneIcon } from "../duotone/ShieldCheckered";
import { ShieldCheckeredIcon as ShieldCheckeredFillIcon } from "../fill/ShieldCheckered";
import { ShieldCheckeredIcon as ShieldCheckeredLightIcon } from "../light/ShieldCheckered";
import { ShieldCheckeredIcon as ShieldCheckeredRegularIcon } from "../regular/ShieldCheckered";
import { ShieldCheckeredIcon as ShieldCheckeredThinIcon } from "../thin/ShieldCheckered";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldCheckeredThinIcon,
	light: ShieldCheckeredLightIcon,
	regular: ShieldCheckeredRegularIcon,
	bold: ShieldCheckeredBoldIcon,
	fill: ShieldCheckeredFillIcon,
	duotone: ShieldCheckeredDuotoneIcon,
} as const;

export function ShieldCheckeredIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldCheckeredIcon as ShieldCheckered };
