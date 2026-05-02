import { HandFistIcon as HandFistBoldIcon } from "../bold/HandFist";
import { HandFistIcon as HandFistDuotoneIcon } from "../duotone/HandFist";
import { HandFistIcon as HandFistFillIcon } from "../fill/HandFist";
import { HandFistIcon as HandFistLightIcon } from "../light/HandFist";
import { HandFistIcon as HandFistRegularIcon } from "../regular/HandFist";
import { HandFistIcon as HandFistThinIcon } from "../thin/HandFist";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandFistThinIcon,
	light: HandFistLightIcon,
	regular: HandFistRegularIcon,
	bold: HandFistBoldIcon,
	fill: HandFistFillIcon,
	duotone: HandFistDuotoneIcon,
} as const;

export function HandFistIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandFistIcon as HandFist };
