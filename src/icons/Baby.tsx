import { BabyIcon as BabyBoldIcon } from "../bold/Baby";
import { BabyIcon as BabyDuotoneIcon } from "../duotone/Baby";
import { BabyIcon as BabyFillIcon } from "../fill/Baby";
import { BabyIcon as BabyLightIcon } from "../light/Baby";
import { BabyIcon as BabyRegularIcon } from "../regular/Baby";
import { BabyIcon as BabyThinIcon } from "../thin/Baby";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BabyThinIcon,
	light: BabyLightIcon,
	regular: BabyRegularIcon,
	bold: BabyBoldIcon,
	fill: BabyFillIcon,
	duotone: BabyDuotoneIcon,
} as const;

export function BabyIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BabyIcon as Baby };
