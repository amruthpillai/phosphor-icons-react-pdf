import { GhostIcon as GhostBoldIcon } from "../bold/Ghost";
import { GhostIcon as GhostDuotoneIcon } from "../duotone/Ghost";
import { GhostIcon as GhostFillIcon } from "../fill/Ghost";
import { GhostIcon as GhostLightIcon } from "../light/Ghost";
import { GhostIcon as GhostRegularIcon } from "../regular/Ghost";
import { GhostIcon as GhostThinIcon } from "../thin/Ghost";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GhostThinIcon,
	light: GhostLightIcon,
	regular: GhostRegularIcon,
	bold: GhostBoldIcon,
	fill: GhostFillIcon,
	duotone: GhostDuotoneIcon,
} as const;

export function GhostIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GhostIcon as Ghost };
