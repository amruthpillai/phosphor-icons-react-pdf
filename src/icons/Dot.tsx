import { DotIcon as DotBoldIcon } from "../bold/Dot";
import { DotIcon as DotDuotoneIcon } from "../duotone/Dot";
import { DotIcon as DotFillIcon } from "../fill/Dot";
import { DotIcon as DotLightIcon } from "../light/Dot";
import { DotIcon as DotRegularIcon } from "../regular/Dot";
import { DotIcon as DotThinIcon } from "../thin/Dot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotThinIcon,
	light: DotLightIcon,
	regular: DotRegularIcon,
	bold: DotBoldIcon,
	fill: DotFillIcon,
	duotone: DotDuotoneIcon,
} as const;

export function DotIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotIcon as Dot };
