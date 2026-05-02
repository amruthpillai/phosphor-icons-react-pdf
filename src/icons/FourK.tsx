import { FourKIcon as FourKBoldIcon } from "../bold/FourK";
import { FourKIcon as FourKDuotoneIcon } from "../duotone/FourK";
import { FourKIcon as FourKFillIcon } from "../fill/FourK";
import { FourKIcon as FourKLightIcon } from "../light/FourK";
import { FourKIcon as FourKRegularIcon } from "../regular/FourK";
import { FourKIcon as FourKThinIcon } from "../thin/FourK";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FourKThinIcon,
	light: FourKLightIcon,
	regular: FourKRegularIcon,
	bold: FourKBoldIcon,
	fill: FourKFillIcon,
	duotone: FourKDuotoneIcon,
} as const;

export function FourKIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FourKIcon as FourK };
