import { FishIcon as FishBoldIcon } from "../bold/Fish";
import { FishIcon as FishDuotoneIcon } from "../duotone/Fish";
import { FishIcon as FishFillIcon } from "../fill/Fish";
import { FishIcon as FishLightIcon } from "../light/Fish";
import { FishIcon as FishRegularIcon } from "../regular/Fish";
import { FishIcon as FishThinIcon } from "../thin/Fish";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FishThinIcon,
	light: FishLightIcon,
	regular: FishRegularIcon,
	bold: FishBoldIcon,
	fill: FishFillIcon,
	duotone: FishDuotoneIcon,
} as const;

export function FishIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FishIcon as Fish };
