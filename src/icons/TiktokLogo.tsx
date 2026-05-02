import { TiktokLogoIcon as TiktokLogoBoldIcon } from "../bold/TiktokLogo";
import { TiktokLogoIcon as TiktokLogoDuotoneIcon } from "../duotone/TiktokLogo";
import { TiktokLogoIcon as TiktokLogoFillIcon } from "../fill/TiktokLogo";
import { TiktokLogoIcon as TiktokLogoLightIcon } from "../light/TiktokLogo";
import { TiktokLogoIcon as TiktokLogoRegularIcon } from "../regular/TiktokLogo";
import { TiktokLogoIcon as TiktokLogoThinIcon } from "../thin/TiktokLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TiktokLogoThinIcon,
	light: TiktokLogoLightIcon,
	regular: TiktokLogoRegularIcon,
	bold: TiktokLogoBoldIcon,
	fill: TiktokLogoFillIcon,
	duotone: TiktokLogoDuotoneIcon,
} as const;

export function TiktokLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TiktokLogoIcon as TiktokLogo };
