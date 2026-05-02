import { TrademarkRegisteredIcon as TrademarkRegisteredBoldIcon } from "../bold/TrademarkRegistered";
import { TrademarkRegisteredIcon as TrademarkRegisteredDuotoneIcon } from "../duotone/TrademarkRegistered";
import { TrademarkRegisteredIcon as TrademarkRegisteredFillIcon } from "../fill/TrademarkRegistered";
import { TrademarkRegisteredIcon as TrademarkRegisteredLightIcon } from "../light/TrademarkRegistered";
import { TrademarkRegisteredIcon as TrademarkRegisteredRegularIcon } from "../regular/TrademarkRegistered";
import { TrademarkRegisteredIcon as TrademarkRegisteredThinIcon } from "../thin/TrademarkRegistered";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrademarkRegisteredThinIcon,
	light: TrademarkRegisteredLightIcon,
	regular: TrademarkRegisteredRegularIcon,
	bold: TrademarkRegisteredBoldIcon,
	fill: TrademarkRegisteredFillIcon,
	duotone: TrademarkRegisteredDuotoneIcon,
} as const;

export function TrademarkRegisteredIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrademarkRegisteredIcon as TrademarkRegistered };
