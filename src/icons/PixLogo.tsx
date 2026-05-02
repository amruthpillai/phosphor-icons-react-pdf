import { PixLogoIcon as PixLogoBoldIcon } from "../bold/PixLogo";
import { PixLogoIcon as PixLogoDuotoneIcon } from "../duotone/PixLogo";
import { PixLogoIcon as PixLogoFillIcon } from "../fill/PixLogo";
import { PixLogoIcon as PixLogoLightIcon } from "../light/PixLogo";
import { PixLogoIcon as PixLogoRegularIcon } from "../regular/PixLogo";
import { PixLogoIcon as PixLogoThinIcon } from "../thin/PixLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PixLogoThinIcon,
	light: PixLogoLightIcon,
	regular: PixLogoRegularIcon,
	bold: PixLogoBoldIcon,
	fill: PixLogoFillIcon,
	duotone: PixLogoDuotoneIcon,
} as const;

export function PixLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PixLogoIcon as PixLogo };
