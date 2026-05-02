import { BeltIcon as BeltBoldIcon } from "../bold/Belt";
import { BeltIcon as BeltDuotoneIcon } from "../duotone/Belt";
import { BeltIcon as BeltFillIcon } from "../fill/Belt";
import { BeltIcon as BeltLightIcon } from "../light/Belt";
import { BeltIcon as BeltRegularIcon } from "../regular/Belt";
import { BeltIcon as BeltThinIcon } from "../thin/Belt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BeltThinIcon,
	light: BeltLightIcon,
	regular: BeltRegularIcon,
	bold: BeltBoldIcon,
	fill: BeltFillIcon,
	duotone: BeltDuotoneIcon,
} as const;

export function BeltIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BeltIcon as Belt };
