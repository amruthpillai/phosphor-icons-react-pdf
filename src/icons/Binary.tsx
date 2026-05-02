import { BinaryIcon as BinaryBoldIcon } from "../bold/Binary";
import { BinaryIcon as BinaryDuotoneIcon } from "../duotone/Binary";
import { BinaryIcon as BinaryFillIcon } from "../fill/Binary";
import { BinaryIcon as BinaryLightIcon } from "../light/Binary";
import { BinaryIcon as BinaryRegularIcon } from "../regular/Binary";
import { BinaryIcon as BinaryThinIcon } from "../thin/Binary";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BinaryThinIcon,
	light: BinaryLightIcon,
	regular: BinaryRegularIcon,
	bold: BinaryBoldIcon,
	fill: BinaryFillIcon,
	duotone: BinaryDuotoneIcon,
} as const;

export function BinaryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BinaryIcon as Binary };
