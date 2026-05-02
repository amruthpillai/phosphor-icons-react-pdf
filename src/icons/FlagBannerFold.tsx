import { FlagBannerFoldIcon as FlagBannerFoldBoldIcon } from "../bold/FlagBannerFold";
import { FlagBannerFoldIcon as FlagBannerFoldDuotoneIcon } from "../duotone/FlagBannerFold";
import { FlagBannerFoldIcon as FlagBannerFoldFillIcon } from "../fill/FlagBannerFold";
import { FlagBannerFoldIcon as FlagBannerFoldLightIcon } from "../light/FlagBannerFold";
import { FlagBannerFoldIcon as FlagBannerFoldRegularIcon } from "../regular/FlagBannerFold";
import { FlagBannerFoldIcon as FlagBannerFoldThinIcon } from "../thin/FlagBannerFold";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlagBannerFoldThinIcon,
	light: FlagBannerFoldLightIcon,
	regular: FlagBannerFoldRegularIcon,
	bold: FlagBannerFoldBoldIcon,
	fill: FlagBannerFoldFillIcon,
	duotone: FlagBannerFoldDuotoneIcon,
} as const;

export function FlagBannerFoldIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlagBannerFoldIcon as FlagBannerFold };
