import { LeafIcon as LeafBoldIcon } from "../bold/Leaf";
import { LeafIcon as LeafDuotoneIcon } from "../duotone/Leaf";
import { LeafIcon as LeafFillIcon } from "../fill/Leaf";
import { LeafIcon as LeafLightIcon } from "../light/Leaf";
import { LeafIcon as LeafRegularIcon } from "../regular/Leaf";
import { LeafIcon as LeafThinIcon } from "../thin/Leaf";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LeafThinIcon,
	light: LeafLightIcon,
	regular: LeafRegularIcon,
	bold: LeafBoldIcon,
	fill: LeafFillIcon,
	duotone: LeafDuotoneIcon,
} as const;

export function LeafIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LeafIcon as Leaf };
