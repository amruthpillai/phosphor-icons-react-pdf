import { FigmaLogoIcon as FigmaLogoBoldIcon } from "../bold/FigmaLogo";
import { FigmaLogoIcon as FigmaLogoDuotoneIcon } from "../duotone/FigmaLogo";
import { FigmaLogoIcon as FigmaLogoFillIcon } from "../fill/FigmaLogo";
import { FigmaLogoIcon as FigmaLogoLightIcon } from "../light/FigmaLogo";
import { FigmaLogoIcon as FigmaLogoRegularIcon } from "../regular/FigmaLogo";
import { FigmaLogoIcon as FigmaLogoThinIcon } from "../thin/FigmaLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FigmaLogoThinIcon,
	light: FigmaLogoLightIcon,
	regular: FigmaLogoRegularIcon,
	bold: FigmaLogoBoldIcon,
	fill: FigmaLogoFillIcon,
	duotone: FigmaLogoDuotoneIcon,
} as const;

export function FigmaLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FigmaLogoIcon as FigmaLogo };
