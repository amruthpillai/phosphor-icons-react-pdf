import { HandPeaceIcon as HandPeaceBoldIcon } from "../bold/HandPeace";
import { HandPeaceIcon as HandPeaceDuotoneIcon } from "../duotone/HandPeace";
import { HandPeaceIcon as HandPeaceFillIcon } from "../fill/HandPeace";
import { HandPeaceIcon as HandPeaceLightIcon } from "../light/HandPeace";
import { HandPeaceIcon as HandPeaceRegularIcon } from "../regular/HandPeace";
import { HandPeaceIcon as HandPeaceThinIcon } from "../thin/HandPeace";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandPeaceThinIcon,
	light: HandPeaceLightIcon,
	regular: HandPeaceRegularIcon,
	bold: HandPeaceBoldIcon,
	fill: HandPeaceFillIcon,
	duotone: HandPeaceDuotoneIcon,
} as const;

export function HandPeaceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandPeaceIcon as HandPeace };
