import { SoundcloudLogoIcon as SoundcloudLogoBoldIcon } from "../bold/SoundcloudLogo";
import { SoundcloudLogoIcon as SoundcloudLogoDuotoneIcon } from "../duotone/SoundcloudLogo";
import { SoundcloudLogoIcon as SoundcloudLogoFillIcon } from "../fill/SoundcloudLogo";
import { SoundcloudLogoIcon as SoundcloudLogoLightIcon } from "../light/SoundcloudLogo";
import { SoundcloudLogoIcon as SoundcloudLogoRegularIcon } from "../regular/SoundcloudLogo";
import { SoundcloudLogoIcon as SoundcloudLogoThinIcon } from "../thin/SoundcloudLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SoundcloudLogoThinIcon,
	light: SoundcloudLogoLightIcon,
	regular: SoundcloudLogoRegularIcon,
	bold: SoundcloudLogoBoldIcon,
	fill: SoundcloudLogoFillIcon,
	duotone: SoundcloudLogoDuotoneIcon,
} as const;

export function SoundcloudLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SoundcloudLogoIcon as SoundcloudLogo };
