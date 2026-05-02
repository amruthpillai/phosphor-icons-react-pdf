import { GraphicsCardIcon as GraphicsCardBoldIcon } from "../bold/GraphicsCard";
import { GraphicsCardIcon as GraphicsCardDuotoneIcon } from "../duotone/GraphicsCard";
import { GraphicsCardIcon as GraphicsCardFillIcon } from "../fill/GraphicsCard";
import { GraphicsCardIcon as GraphicsCardLightIcon } from "../light/GraphicsCard";
import { GraphicsCardIcon as GraphicsCardRegularIcon } from "../regular/GraphicsCard";
import { GraphicsCardIcon as GraphicsCardThinIcon } from "../thin/GraphicsCard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GraphicsCardThinIcon,
	light: GraphicsCardLightIcon,
	regular: GraphicsCardRegularIcon,
	bold: GraphicsCardBoldIcon,
	fill: GraphicsCardFillIcon,
	duotone: GraphicsCardDuotoneIcon,
} as const;

export function GraphicsCardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GraphicsCardIcon as GraphicsCard };
