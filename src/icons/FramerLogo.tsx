import { FramerLogoIcon as FramerLogoBoldIcon } from "../bold/FramerLogo";
import { FramerLogoIcon as FramerLogoDuotoneIcon } from "../duotone/FramerLogo";
import { FramerLogoIcon as FramerLogoFillIcon } from "../fill/FramerLogo";
import { FramerLogoIcon as FramerLogoLightIcon } from "../light/FramerLogo";
import { FramerLogoIcon as FramerLogoRegularIcon } from "../regular/FramerLogo";
import { FramerLogoIcon as FramerLogoThinIcon } from "../thin/FramerLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FramerLogoThinIcon,
	light: FramerLogoLightIcon,
	regular: FramerLogoRegularIcon,
	bold: FramerLogoBoldIcon,
	fill: FramerLogoFillIcon,
	duotone: FramerLogoDuotoneIcon,
} as const;

export function FramerLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FramerLogoIcon as FramerLogo };
