import { PinterestLogoIcon as PinterestLogoBoldIcon } from "../bold/PinterestLogo";
import { PinterestLogoIcon as PinterestLogoDuotoneIcon } from "../duotone/PinterestLogo";
import { PinterestLogoIcon as PinterestLogoFillIcon } from "../fill/PinterestLogo";
import { PinterestLogoIcon as PinterestLogoLightIcon } from "../light/PinterestLogo";
import { PinterestLogoIcon as PinterestLogoRegularIcon } from "../regular/PinterestLogo";
import { PinterestLogoIcon as PinterestLogoThinIcon } from "../thin/PinterestLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PinterestLogoThinIcon,
	light: PinterestLogoLightIcon,
	regular: PinterestLogoRegularIcon,
	bold: PinterestLogoBoldIcon,
	fill: PinterestLogoFillIcon,
	duotone: PinterestLogoDuotoneIcon,
} as const;

export function PinterestLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PinterestLogoIcon as PinterestLogo };
