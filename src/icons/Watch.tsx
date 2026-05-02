import { WatchIcon as WatchBoldIcon } from "../bold/Watch";
import { WatchIcon as WatchDuotoneIcon } from "../duotone/Watch";
import { WatchIcon as WatchFillIcon } from "../fill/Watch";
import { WatchIcon as WatchLightIcon } from "../light/Watch";
import { WatchIcon as WatchRegularIcon } from "../regular/Watch";
import { WatchIcon as WatchThinIcon } from "../thin/Watch";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WatchThinIcon,
	light: WatchLightIcon,
	regular: WatchRegularIcon,
	bold: WatchBoldIcon,
	fill: WatchFillIcon,
	duotone: WatchDuotoneIcon,
} as const;

export function WatchIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WatchIcon as Watch };
