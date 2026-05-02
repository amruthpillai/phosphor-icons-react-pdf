import { PenNibIcon as PenNibBoldIcon } from "../bold/PenNib";
import { PenNibIcon as PenNibDuotoneIcon } from "../duotone/PenNib";
import { PenNibIcon as PenNibFillIcon } from "../fill/PenNib";
import { PenNibIcon as PenNibLightIcon } from "../light/PenNib";
import { PenNibIcon as PenNibRegularIcon } from "../regular/PenNib";
import { PenNibIcon as PenNibThinIcon } from "../thin/PenNib";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PenNibThinIcon,
	light: PenNibLightIcon,
	regular: PenNibRegularIcon,
	bold: PenNibBoldIcon,
	fill: PenNibFillIcon,
	duotone: PenNibDuotoneIcon,
} as const;

export function PenNibIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PenNibIcon as PenNib };
