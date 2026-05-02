import { SketchLogoIcon as SketchLogoBoldIcon } from "../bold/SketchLogo";
import { SketchLogoIcon as SketchLogoDuotoneIcon } from "../duotone/SketchLogo";
import { SketchLogoIcon as SketchLogoFillIcon } from "../fill/SketchLogo";
import { SketchLogoIcon as SketchLogoLightIcon } from "../light/SketchLogo";
import { SketchLogoIcon as SketchLogoRegularIcon } from "../regular/SketchLogo";
import { SketchLogoIcon as SketchLogoThinIcon } from "../thin/SketchLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SketchLogoThinIcon,
	light: SketchLogoLightIcon,
	regular: SketchLogoRegularIcon,
	bold: SketchLogoBoldIcon,
	fill: SketchLogoFillIcon,
	duotone: SketchLogoDuotoneIcon,
} as const;

export function SketchLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SketchLogoIcon as SketchLogo };
