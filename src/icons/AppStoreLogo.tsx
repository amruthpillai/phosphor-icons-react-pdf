import { AppStoreLogoIcon as AppStoreLogoBoldIcon } from "../bold/AppStoreLogo";
import { AppStoreLogoIcon as AppStoreLogoDuotoneIcon } from "../duotone/AppStoreLogo";
import { AppStoreLogoIcon as AppStoreLogoFillIcon } from "../fill/AppStoreLogo";
import { AppStoreLogoIcon as AppStoreLogoLightIcon } from "../light/AppStoreLogo";
import { AppStoreLogoIcon as AppStoreLogoRegularIcon } from "../regular/AppStoreLogo";
import { AppStoreLogoIcon as AppStoreLogoThinIcon } from "../thin/AppStoreLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AppStoreLogoThinIcon,
	light: AppStoreLogoLightIcon,
	regular: AppStoreLogoRegularIcon,
	bold: AppStoreLogoBoldIcon,
	fill: AppStoreLogoFillIcon,
	duotone: AppStoreLogoDuotoneIcon,
} as const;

export function AppStoreLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AppStoreLogoIcon as AppStoreLogo };
