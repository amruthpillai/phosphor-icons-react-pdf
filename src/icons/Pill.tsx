import { PillIcon as PillBoldIcon } from "../bold/Pill";
import { PillIcon as PillDuotoneIcon } from "../duotone/Pill";
import { PillIcon as PillFillIcon } from "../fill/Pill";
import { PillIcon as PillLightIcon } from "../light/Pill";
import { PillIcon as PillRegularIcon } from "../regular/Pill";
import { PillIcon as PillThinIcon } from "../thin/Pill";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PillThinIcon,
	light: PillLightIcon,
	regular: PillRegularIcon,
	bold: PillBoldIcon,
	fill: PillFillIcon,
	duotone: PillDuotoneIcon,
} as const;

export function PillIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PillIcon as Pill };
