import { YoutubeLogoIcon as YoutubeLogoBoldIcon } from "../bold/YoutubeLogo";
import { YoutubeLogoIcon as YoutubeLogoDuotoneIcon } from "../duotone/YoutubeLogo";
import { YoutubeLogoIcon as YoutubeLogoFillIcon } from "../fill/YoutubeLogo";
import { YoutubeLogoIcon as YoutubeLogoLightIcon } from "../light/YoutubeLogo";
import { YoutubeLogoIcon as YoutubeLogoRegularIcon } from "../regular/YoutubeLogo";
import { YoutubeLogoIcon as YoutubeLogoThinIcon } from "../thin/YoutubeLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: YoutubeLogoThinIcon,
	light: YoutubeLogoLightIcon,
	regular: YoutubeLogoRegularIcon,
	bold: YoutubeLogoBoldIcon,
	fill: YoutubeLogoFillIcon,
	duotone: YoutubeLogoDuotoneIcon,
} as const;

export function YoutubeLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { YoutubeLogoIcon as YoutubeLogo };
