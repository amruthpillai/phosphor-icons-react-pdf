import { RedditLogoIcon as RedditLogoBoldIcon } from "../bold/RedditLogo";
import { RedditLogoIcon as RedditLogoDuotoneIcon } from "../duotone/RedditLogo";
import { RedditLogoIcon as RedditLogoFillIcon } from "../fill/RedditLogo";
import { RedditLogoIcon as RedditLogoLightIcon } from "../light/RedditLogo";
import { RedditLogoIcon as RedditLogoRegularIcon } from "../regular/RedditLogo";
import { RedditLogoIcon as RedditLogoThinIcon } from "../thin/RedditLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RedditLogoThinIcon,
	light: RedditLogoLightIcon,
	regular: RedditLogoRegularIcon,
	bold: RedditLogoBoldIcon,
	fill: RedditLogoFillIcon,
	duotone: RedditLogoDuotoneIcon,
} as const;

export function RedditLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RedditLogoIcon as RedditLogo };
