import { LayoutIcon as LayoutBoldIcon } from "../bold/Layout";
import { LayoutIcon as LayoutDuotoneIcon } from "../duotone/Layout";
import { LayoutIcon as LayoutFillIcon } from "../fill/Layout";
import { LayoutIcon as LayoutLightIcon } from "../light/Layout";
import { LayoutIcon as LayoutRegularIcon } from "../regular/Layout";
import { LayoutIcon as LayoutThinIcon } from "../thin/Layout";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LayoutThinIcon,
	light: LayoutLightIcon,
	regular: LayoutRegularIcon,
	bold: LayoutBoldIcon,
	fill: LayoutFillIcon,
	duotone: LayoutDuotoneIcon,
} as const;

export function LayoutIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LayoutIcon as Layout };
