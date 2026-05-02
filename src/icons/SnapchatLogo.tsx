import { SnapchatLogoIcon as SnapchatLogoBoldIcon } from "../bold/SnapchatLogo";
import { SnapchatLogoIcon as SnapchatLogoDuotoneIcon } from "../duotone/SnapchatLogo";
import { SnapchatLogoIcon as SnapchatLogoFillIcon } from "../fill/SnapchatLogo";
import { SnapchatLogoIcon as SnapchatLogoLightIcon } from "../light/SnapchatLogo";
import { SnapchatLogoIcon as SnapchatLogoRegularIcon } from "../regular/SnapchatLogo";
import { SnapchatLogoIcon as SnapchatLogoThinIcon } from "../thin/SnapchatLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SnapchatLogoThinIcon,
	light: SnapchatLogoLightIcon,
	regular: SnapchatLogoRegularIcon,
	bold: SnapchatLogoBoldIcon,
	fill: SnapchatLogoFillIcon,
	duotone: SnapchatLogoDuotoneIcon,
} as const;

export function SnapchatLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SnapchatLogoIcon as SnapchatLogo };
