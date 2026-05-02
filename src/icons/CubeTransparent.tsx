import { CubeTransparentIcon as CubeTransparentBoldIcon } from "../bold/CubeTransparent";
import { CubeTransparentIcon as CubeTransparentDuotoneIcon } from "../duotone/CubeTransparent";
import { CubeTransparentIcon as CubeTransparentFillIcon } from "../fill/CubeTransparent";
import { CubeTransparentIcon as CubeTransparentLightIcon } from "../light/CubeTransparent";
import { CubeTransparentIcon as CubeTransparentRegularIcon } from "../regular/CubeTransparent";
import { CubeTransparentIcon as CubeTransparentThinIcon } from "../thin/CubeTransparent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CubeTransparentThinIcon,
	light: CubeTransparentLightIcon,
	regular: CubeTransparentRegularIcon,
	bold: CubeTransparentBoldIcon,
	fill: CubeTransparentFillIcon,
	duotone: CubeTransparentDuotoneIcon,
} as const;

export function CubeTransparentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CubeTransparentIcon as CubeTransparent };
