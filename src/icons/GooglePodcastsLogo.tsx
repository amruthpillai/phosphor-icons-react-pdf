import { GooglePodcastsLogoIcon as GooglePodcastsLogoBoldIcon } from "../bold/GooglePodcastsLogo";
import { GooglePodcastsLogoIcon as GooglePodcastsLogoDuotoneIcon } from "../duotone/GooglePodcastsLogo";
import { GooglePodcastsLogoIcon as GooglePodcastsLogoFillIcon } from "../fill/GooglePodcastsLogo";
import { GooglePodcastsLogoIcon as GooglePodcastsLogoLightIcon } from "../light/GooglePodcastsLogo";
import { GooglePodcastsLogoIcon as GooglePodcastsLogoRegularIcon } from "../regular/GooglePodcastsLogo";
import { GooglePodcastsLogoIcon as GooglePodcastsLogoThinIcon } from "../thin/GooglePodcastsLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GooglePodcastsLogoThinIcon,
	light: GooglePodcastsLogoLightIcon,
	regular: GooglePodcastsLogoRegularIcon,
	bold: GooglePodcastsLogoBoldIcon,
	fill: GooglePodcastsLogoFillIcon,
	duotone: GooglePodcastsLogoDuotoneIcon,
} as const;

export function GooglePodcastsLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GooglePodcastsLogoIcon as GooglePodcastsLogo };
