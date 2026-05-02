import { CornersInIcon as CornersInBoldIcon } from "../bold/CornersIn";
import { CornersInIcon as CornersInDuotoneIcon } from "../duotone/CornersIn";
import { CornersInIcon as CornersInFillIcon } from "../fill/CornersIn";
import { CornersInIcon as CornersInLightIcon } from "../light/CornersIn";
import { CornersInIcon as CornersInRegularIcon } from "../regular/CornersIn";
import { CornersInIcon as CornersInThinIcon } from "../thin/CornersIn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CornersInThinIcon,
	light: CornersInLightIcon,
	regular: CornersInRegularIcon,
	bold: CornersInBoldIcon,
	fill: CornersInFillIcon,
	duotone: CornersInDuotoneIcon,
} as const;

export function CornersInIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CornersInIcon as CornersIn };
