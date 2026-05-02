import { HandHeartIcon as HandHeartBoldIcon } from "../bold/HandHeart";
import { HandHeartIcon as HandHeartDuotoneIcon } from "../duotone/HandHeart";
import { HandHeartIcon as HandHeartFillIcon } from "../fill/HandHeart";
import { HandHeartIcon as HandHeartLightIcon } from "../light/HandHeart";
import { HandHeartIcon as HandHeartRegularIcon } from "../regular/HandHeart";
import { HandHeartIcon as HandHeartThinIcon } from "../thin/HandHeart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandHeartThinIcon,
	light: HandHeartLightIcon,
	regular: HandHeartRegularIcon,
	bold: HandHeartBoldIcon,
	fill: HandHeartFillIcon,
	duotone: HandHeartDuotoneIcon,
} as const;

export function HandHeartIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandHeartIcon as HandHeart };
