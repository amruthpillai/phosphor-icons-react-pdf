import { MopedIcon as MopedBoldIcon } from "../bold/Moped";
import { MopedIcon as MopedDuotoneIcon } from "../duotone/Moped";
import { MopedIcon as MopedFillIcon } from "../fill/Moped";
import { MopedIcon as MopedLightIcon } from "../light/Moped";
import { MopedIcon as MopedRegularIcon } from "../regular/Moped";
import { MopedIcon as MopedThinIcon } from "../thin/Moped";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MopedThinIcon,
	light: MopedLightIcon,
	regular: MopedRegularIcon,
	bold: MopedBoldIcon,
	fill: MopedFillIcon,
	duotone: MopedDuotoneIcon,
} as const;

export function MopedIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MopedIcon as Moped };
