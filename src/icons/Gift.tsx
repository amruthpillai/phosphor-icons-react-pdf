import { GiftIcon as GiftBoldIcon } from "../bold/Gift";
import { GiftIcon as GiftDuotoneIcon } from "../duotone/Gift";
import { GiftIcon as GiftFillIcon } from "../fill/Gift";
import { GiftIcon as GiftLightIcon } from "../light/Gift";
import { GiftIcon as GiftRegularIcon } from "../regular/Gift";
import { GiftIcon as GiftThinIcon } from "../thin/Gift";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GiftThinIcon,
	light: GiftLightIcon,
	regular: GiftRegularIcon,
	bold: GiftBoldIcon,
	fill: GiftFillIcon,
	duotone: GiftDuotoneIcon,
} as const;

export function GiftIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GiftIcon as Gift };
