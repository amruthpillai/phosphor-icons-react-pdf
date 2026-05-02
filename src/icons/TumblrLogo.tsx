import { TumblrLogoIcon as TumblrLogoBoldIcon } from "../bold/TumblrLogo";
import { TumblrLogoIcon as TumblrLogoDuotoneIcon } from "../duotone/TumblrLogo";
import { TumblrLogoIcon as TumblrLogoFillIcon } from "../fill/TumblrLogo";
import { TumblrLogoIcon as TumblrLogoLightIcon } from "../light/TumblrLogo";
import { TumblrLogoIcon as TumblrLogoRegularIcon } from "../regular/TumblrLogo";
import { TumblrLogoIcon as TumblrLogoThinIcon } from "../thin/TumblrLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TumblrLogoThinIcon,
	light: TumblrLogoLightIcon,
	regular: TumblrLogoRegularIcon,
	bold: TumblrLogoBoldIcon,
	fill: TumblrLogoFillIcon,
	duotone: TumblrLogoDuotoneIcon,
} as const;

export function TumblrLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TumblrLogoIcon as TumblrLogo };
