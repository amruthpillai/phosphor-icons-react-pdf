import { HammerIcon as HammerBoldIcon } from "../bold/Hammer";
import { HammerIcon as HammerDuotoneIcon } from "../duotone/Hammer";
import { HammerIcon as HammerFillIcon } from "../fill/Hammer";
import { HammerIcon as HammerLightIcon } from "../light/Hammer";
import { HammerIcon as HammerRegularIcon } from "../regular/Hammer";
import { HammerIcon as HammerThinIcon } from "../thin/Hammer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HammerThinIcon,
	light: HammerLightIcon,
	regular: HammerRegularIcon,
	bold: HammerBoldIcon,
	fill: HammerFillIcon,
	duotone: HammerDuotoneIcon,
} as const;

export function HammerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HammerIcon as Hammer };
