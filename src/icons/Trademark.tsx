import { TrademarkIcon as TrademarkBoldIcon } from "../bold/Trademark";
import { TrademarkIcon as TrademarkDuotoneIcon } from "../duotone/Trademark";
import { TrademarkIcon as TrademarkFillIcon } from "../fill/Trademark";
import { TrademarkIcon as TrademarkLightIcon } from "../light/Trademark";
import { TrademarkIcon as TrademarkRegularIcon } from "../regular/Trademark";
import { TrademarkIcon as TrademarkThinIcon } from "../thin/Trademark";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrademarkThinIcon,
	light: TrademarkLightIcon,
	regular: TrademarkRegularIcon,
	bold: TrademarkBoldIcon,
	fill: TrademarkFillIcon,
	duotone: TrademarkDuotoneIcon,
} as const;

export function TrademarkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrademarkIcon as Trademark };
