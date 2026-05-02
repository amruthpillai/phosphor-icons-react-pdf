import { MastodonLogoIcon as MastodonLogoBoldIcon } from "../bold/MastodonLogo";
import { MastodonLogoIcon as MastodonLogoDuotoneIcon } from "../duotone/MastodonLogo";
import { MastodonLogoIcon as MastodonLogoFillIcon } from "../fill/MastodonLogo";
import { MastodonLogoIcon as MastodonLogoLightIcon } from "../light/MastodonLogo";
import { MastodonLogoIcon as MastodonLogoRegularIcon } from "../regular/MastodonLogo";
import { MastodonLogoIcon as MastodonLogoThinIcon } from "../thin/MastodonLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MastodonLogoThinIcon,
	light: MastodonLogoLightIcon,
	regular: MastodonLogoRegularIcon,
	bold: MastodonLogoBoldIcon,
	fill: MastodonLogoFillIcon,
	duotone: MastodonLogoDuotoneIcon,
} as const;

export function MastodonLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MastodonLogoIcon as MastodonLogo };
