import { SkullIcon as SkullBoldIcon } from "../bold/Skull";
import { SkullIcon as SkullDuotoneIcon } from "../duotone/Skull";
import { SkullIcon as SkullFillIcon } from "../fill/Skull";
import { SkullIcon as SkullLightIcon } from "../light/Skull";
import { SkullIcon as SkullRegularIcon } from "../regular/Skull";
import { SkullIcon as SkullThinIcon } from "../thin/Skull";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SkullThinIcon,
	light: SkullLightIcon,
	regular: SkullRegularIcon,
	bold: SkullBoldIcon,
	fill: SkullFillIcon,
	duotone: SkullDuotoneIcon,
} as const;

export function SkullIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SkullIcon as Skull };
