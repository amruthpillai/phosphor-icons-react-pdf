import { SwapIcon as SwapBoldIcon } from "../bold/Swap";
import { SwapIcon as SwapDuotoneIcon } from "../duotone/Swap";
import { SwapIcon as SwapFillIcon } from "../fill/Swap";
import { SwapIcon as SwapLightIcon } from "../light/Swap";
import { SwapIcon as SwapRegularIcon } from "../regular/Swap";
import { SwapIcon as SwapThinIcon } from "../thin/Swap";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SwapThinIcon,
	light: SwapLightIcon,
	regular: SwapRegularIcon,
	bold: SwapBoldIcon,
	fill: SwapFillIcon,
	duotone: SwapDuotoneIcon,
} as const;

export function SwapIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SwapIcon as Swap };
