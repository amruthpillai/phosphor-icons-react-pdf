import { LastfmLogoIcon as LastfmLogoBoldIcon } from "../bold/LastfmLogo";
import { LastfmLogoIcon as LastfmLogoDuotoneIcon } from "../duotone/LastfmLogo";
import { LastfmLogoIcon as LastfmLogoFillIcon } from "../fill/LastfmLogo";
import { LastfmLogoIcon as LastfmLogoLightIcon } from "../light/LastfmLogo";
import { LastfmLogoIcon as LastfmLogoRegularIcon } from "../regular/LastfmLogo";
import { LastfmLogoIcon as LastfmLogoThinIcon } from "../thin/LastfmLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LastfmLogoThinIcon,
	light: LastfmLogoLightIcon,
	regular: LastfmLogoRegularIcon,
	bold: LastfmLogoBoldIcon,
	fill: LastfmLogoFillIcon,
	duotone: LastfmLogoDuotoneIcon,
} as const;

export function LastfmLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LastfmLogoIcon as LastfmLogo };
