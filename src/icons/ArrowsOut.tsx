import { ArrowsOutIcon as ArrowsOutBoldIcon } from "../bold/ArrowsOut";
import { ArrowsOutIcon as ArrowsOutDuotoneIcon } from "../duotone/ArrowsOut";
import { ArrowsOutIcon as ArrowsOutFillIcon } from "../fill/ArrowsOut";
import { ArrowsOutIcon as ArrowsOutLightIcon } from "../light/ArrowsOut";
import { ArrowsOutIcon as ArrowsOutRegularIcon } from "../regular/ArrowsOut";
import { ArrowsOutIcon as ArrowsOutThinIcon } from "../thin/ArrowsOut";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsOutThinIcon,
	light: ArrowsOutLightIcon,
	regular: ArrowsOutRegularIcon,
	bold: ArrowsOutBoldIcon,
	fill: ArrowsOutFillIcon,
	duotone: ArrowsOutDuotoneIcon,
} as const;

export function ArrowsOutIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsOutIcon as ArrowsOut };
