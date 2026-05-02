import { ApplePodcastsLogoIcon as ApplePodcastsLogoBoldIcon } from "../bold/ApplePodcastsLogo";
import { ApplePodcastsLogoIcon as ApplePodcastsLogoDuotoneIcon } from "../duotone/ApplePodcastsLogo";
import { ApplePodcastsLogoIcon as ApplePodcastsLogoFillIcon } from "../fill/ApplePodcastsLogo";
import { ApplePodcastsLogoIcon as ApplePodcastsLogoLightIcon } from "../light/ApplePodcastsLogo";
import { ApplePodcastsLogoIcon as ApplePodcastsLogoRegularIcon } from "../regular/ApplePodcastsLogo";
import { ApplePodcastsLogoIcon as ApplePodcastsLogoThinIcon } from "../thin/ApplePodcastsLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ApplePodcastsLogoThinIcon,
	light: ApplePodcastsLogoLightIcon,
	regular: ApplePodcastsLogoRegularIcon,
	bold: ApplePodcastsLogoBoldIcon,
	fill: ApplePodcastsLogoFillIcon,
	duotone: ApplePodcastsLogoDuotoneIcon,
} as const;

export function ApplePodcastsLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ApplePodcastsLogoIcon as ApplePodcastsLogo };
