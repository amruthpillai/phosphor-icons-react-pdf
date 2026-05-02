import { ShirtFoldedIcon as ShirtFoldedBoldIcon } from "../bold/ShirtFolded";
import { ShirtFoldedIcon as ShirtFoldedDuotoneIcon } from "../duotone/ShirtFolded";
import { ShirtFoldedIcon as ShirtFoldedFillIcon } from "../fill/ShirtFolded";
import { ShirtFoldedIcon as ShirtFoldedLightIcon } from "../light/ShirtFolded";
import { ShirtFoldedIcon as ShirtFoldedRegularIcon } from "../regular/ShirtFolded";
import { ShirtFoldedIcon as ShirtFoldedThinIcon } from "../thin/ShirtFolded";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShirtFoldedThinIcon,
	light: ShirtFoldedLightIcon,
	regular: ShirtFoldedRegularIcon,
	bold: ShirtFoldedBoldIcon,
	fill: ShirtFoldedFillIcon,
	duotone: ShirtFoldedDuotoneIcon,
} as const;

export function ShirtFoldedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShirtFoldedIcon as ShirtFolded };
