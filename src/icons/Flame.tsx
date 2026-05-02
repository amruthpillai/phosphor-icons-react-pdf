import { FlameIcon as FlameBoldIcon } from "../bold/Flame";
import { FlameIcon as FlameDuotoneIcon } from "../duotone/Flame";
import { FlameIcon as FlameFillIcon } from "../fill/Flame";
import { FlameIcon as FlameLightIcon } from "../light/Flame";
import { FlameIcon as FlameRegularIcon } from "../regular/Flame";
import { FlameIcon as FlameThinIcon } from "../thin/Flame";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlameThinIcon,
	light: FlameLightIcon,
	regular: FlameRegularIcon,
	bold: FlameBoldIcon,
	fill: FlameFillIcon,
	duotone: FlameDuotoneIcon,
} as const;

export function FlameIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlameIcon as Flame };
