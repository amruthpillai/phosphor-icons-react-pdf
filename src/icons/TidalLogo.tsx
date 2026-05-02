import { TidalLogoIcon as TidalLogoBoldIcon } from "../bold/TidalLogo";
import { TidalLogoIcon as TidalLogoDuotoneIcon } from "../duotone/TidalLogo";
import { TidalLogoIcon as TidalLogoFillIcon } from "../fill/TidalLogo";
import { TidalLogoIcon as TidalLogoLightIcon } from "../light/TidalLogo";
import { TidalLogoIcon as TidalLogoRegularIcon } from "../regular/TidalLogo";
import { TidalLogoIcon as TidalLogoThinIcon } from "../thin/TidalLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TidalLogoThinIcon,
	light: TidalLogoLightIcon,
	regular: TidalLogoRegularIcon,
	bold: TidalLogoBoldIcon,
	fill: TidalLogoFillIcon,
	duotone: TidalLogoDuotoneIcon,
} as const;

export function TidalLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TidalLogoIcon as TidalLogo };
