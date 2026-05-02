import { ShieldIcon as ShieldBoldIcon } from "../bold/Shield";
import { ShieldIcon as ShieldDuotoneIcon } from "../duotone/Shield";
import { ShieldIcon as ShieldFillIcon } from "../fill/Shield";
import { ShieldIcon as ShieldLightIcon } from "../light/Shield";
import { ShieldIcon as ShieldRegularIcon } from "../regular/Shield";
import { ShieldIcon as ShieldThinIcon } from "../thin/Shield";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldThinIcon,
	light: ShieldLightIcon,
	regular: ShieldRegularIcon,
	bold: ShieldBoldIcon,
	fill: ShieldFillIcon,
	duotone: ShieldDuotoneIcon,
} as const;

export function ShieldIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldIcon as Shield };
