import { TwitchLogoIcon as TwitchLogoBoldIcon } from "../bold/TwitchLogo";
import { TwitchLogoIcon as TwitchLogoDuotoneIcon } from "../duotone/TwitchLogo";
import { TwitchLogoIcon as TwitchLogoFillIcon } from "../fill/TwitchLogo";
import { TwitchLogoIcon as TwitchLogoLightIcon } from "../light/TwitchLogo";
import { TwitchLogoIcon as TwitchLogoRegularIcon } from "../regular/TwitchLogo";
import { TwitchLogoIcon as TwitchLogoThinIcon } from "../thin/TwitchLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TwitchLogoThinIcon,
	light: TwitchLogoLightIcon,
	regular: TwitchLogoRegularIcon,
	bold: TwitchLogoBoldIcon,
	fill: TwitchLogoFillIcon,
	duotone: TwitchLogoDuotoneIcon,
} as const;

export function TwitchLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TwitchLogoIcon as TwitchLogo };
