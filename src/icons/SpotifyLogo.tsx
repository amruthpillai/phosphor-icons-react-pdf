import { SpotifyLogoIcon as SpotifyLogoBoldIcon } from "../bold/SpotifyLogo";
import { SpotifyLogoIcon as SpotifyLogoDuotoneIcon } from "../duotone/SpotifyLogo";
import { SpotifyLogoIcon as SpotifyLogoFillIcon } from "../fill/SpotifyLogo";
import { SpotifyLogoIcon as SpotifyLogoLightIcon } from "../light/SpotifyLogo";
import { SpotifyLogoIcon as SpotifyLogoRegularIcon } from "../regular/SpotifyLogo";
import { SpotifyLogoIcon as SpotifyLogoThinIcon } from "../thin/SpotifyLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpotifyLogoThinIcon,
	light: SpotifyLogoLightIcon,
	regular: SpotifyLogoRegularIcon,
	bold: SpotifyLogoBoldIcon,
	fill: SpotifyLogoFillIcon,
	duotone: SpotifyLogoDuotoneIcon,
} as const;

export function SpotifyLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpotifyLogoIcon as SpotifyLogo };
