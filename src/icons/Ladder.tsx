import { LadderIcon as LadderBoldIcon } from "../bold/Ladder";
import { LadderIcon as LadderDuotoneIcon } from "../duotone/Ladder";
import { LadderIcon as LadderFillIcon } from "../fill/Ladder";
import { LadderIcon as LadderLightIcon } from "../light/Ladder";
import { LadderIcon as LadderRegularIcon } from "../regular/Ladder";
import { LadderIcon as LadderThinIcon } from "../thin/Ladder";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LadderThinIcon,
	light: LadderLightIcon,
	regular: LadderRegularIcon,
	bold: LadderBoldIcon,
	fill: LadderFillIcon,
	duotone: LadderDuotoneIcon,
} as const;

export function LadderIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LadderIcon as Ladder };
