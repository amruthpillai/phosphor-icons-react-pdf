import { CornersOutIcon as CornersOutBoldIcon } from "../bold/CornersOut";
import { CornersOutIcon as CornersOutDuotoneIcon } from "../duotone/CornersOut";
import { CornersOutIcon as CornersOutFillIcon } from "../fill/CornersOut";
import { CornersOutIcon as CornersOutLightIcon } from "../light/CornersOut";
import { CornersOutIcon as CornersOutRegularIcon } from "../regular/CornersOut";
import { CornersOutIcon as CornersOutThinIcon } from "../thin/CornersOut";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CornersOutThinIcon,
	light: CornersOutLightIcon,
	regular: CornersOutRegularIcon,
	bold: CornersOutBoldIcon,
	fill: CornersOutFillIcon,
	duotone: CornersOutDuotoneIcon,
} as const;

export function CornersOutIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CornersOutIcon as CornersOut };
