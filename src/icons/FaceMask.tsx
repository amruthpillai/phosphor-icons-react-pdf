import { FaceMaskIcon as FaceMaskBoldIcon } from "../bold/FaceMask";
import { FaceMaskIcon as FaceMaskDuotoneIcon } from "../duotone/FaceMask";
import { FaceMaskIcon as FaceMaskFillIcon } from "../fill/FaceMask";
import { FaceMaskIcon as FaceMaskLightIcon } from "../light/FaceMask";
import { FaceMaskIcon as FaceMaskRegularIcon } from "../regular/FaceMask";
import { FaceMaskIcon as FaceMaskThinIcon } from "../thin/FaceMask";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FaceMaskThinIcon,
	light: FaceMaskLightIcon,
	regular: FaceMaskRegularIcon,
	bold: FaceMaskBoldIcon,
	fill: FaceMaskFillIcon,
	duotone: FaceMaskDuotoneIcon,
} as const;

export function FaceMaskIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FaceMaskIcon as FaceMask };
