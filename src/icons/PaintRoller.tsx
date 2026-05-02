import { PaintRollerIcon as PaintRollerBoldIcon } from "../bold/PaintRoller";
import { PaintRollerIcon as PaintRollerDuotoneIcon } from "../duotone/PaintRoller";
import { PaintRollerIcon as PaintRollerFillIcon } from "../fill/PaintRoller";
import { PaintRollerIcon as PaintRollerLightIcon } from "../light/PaintRoller";
import { PaintRollerIcon as PaintRollerRegularIcon } from "../regular/PaintRoller";
import { PaintRollerIcon as PaintRollerThinIcon } from "../thin/PaintRoller";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaintRollerThinIcon,
	light: PaintRollerLightIcon,
	regular: PaintRollerRegularIcon,
	bold: PaintRollerBoldIcon,
	fill: PaintRollerFillIcon,
	duotone: PaintRollerDuotoneIcon,
} as const;

export function PaintRollerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaintRollerIcon as PaintRoller };
