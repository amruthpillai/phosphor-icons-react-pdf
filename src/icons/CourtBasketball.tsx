import { CourtBasketballIcon as CourtBasketballBoldIcon } from "../bold/CourtBasketball";
import { CourtBasketballIcon as CourtBasketballDuotoneIcon } from "../duotone/CourtBasketball";
import { CourtBasketballIcon as CourtBasketballFillIcon } from "../fill/CourtBasketball";
import { CourtBasketballIcon as CourtBasketballLightIcon } from "../light/CourtBasketball";
import { CourtBasketballIcon as CourtBasketballRegularIcon } from "../regular/CourtBasketball";
import { CourtBasketballIcon as CourtBasketballThinIcon } from "../thin/CourtBasketball";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CourtBasketballThinIcon,
	light: CourtBasketballLightIcon,
	regular: CourtBasketballRegularIcon,
	bold: CourtBasketballBoldIcon,
	fill: CourtBasketballFillIcon,
	duotone: CourtBasketballDuotoneIcon,
} as const;

export function CourtBasketballIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CourtBasketballIcon as CourtBasketball };
