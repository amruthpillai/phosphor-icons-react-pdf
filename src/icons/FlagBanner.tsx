import { FlagBannerIcon as FlagBannerBoldIcon } from "../bold/FlagBanner";
import { FlagBannerIcon as FlagBannerDuotoneIcon } from "../duotone/FlagBanner";
import { FlagBannerIcon as FlagBannerFillIcon } from "../fill/FlagBanner";
import { FlagBannerIcon as FlagBannerLightIcon } from "../light/FlagBanner";
import { FlagBannerIcon as FlagBannerRegularIcon } from "../regular/FlagBanner";
import { FlagBannerIcon as FlagBannerThinIcon } from "../thin/FlagBanner";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlagBannerThinIcon,
	light: FlagBannerLightIcon,
	regular: FlagBannerRegularIcon,
	bold: FlagBannerBoldIcon,
	fill: FlagBannerFillIcon,
	duotone: FlagBannerDuotoneIcon,
} as const;

export function FlagBannerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlagBannerIcon as FlagBanner };
