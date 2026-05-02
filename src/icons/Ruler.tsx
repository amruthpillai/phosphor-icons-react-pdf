import { RulerIcon as RulerBoldIcon } from "../bold/Ruler";
import { RulerIcon as RulerDuotoneIcon } from "../duotone/Ruler";
import { RulerIcon as RulerFillIcon } from "../fill/Ruler";
import { RulerIcon as RulerLightIcon } from "../light/Ruler";
import { RulerIcon as RulerRegularIcon } from "../regular/Ruler";
import { RulerIcon as RulerThinIcon } from "../thin/Ruler";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RulerThinIcon,
	light: RulerLightIcon,
	regular: RulerRegularIcon,
	bold: RulerBoldIcon,
	fill: RulerFillIcon,
	duotone: RulerDuotoneIcon,
} as const;

export function RulerIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RulerIcon as Ruler };
