import { AndroidLogoIcon as AndroidLogoBoldIcon } from "../bold/AndroidLogo";
import { AndroidLogoIcon as AndroidLogoDuotoneIcon } from "../duotone/AndroidLogo";
import { AndroidLogoIcon as AndroidLogoFillIcon } from "../fill/AndroidLogo";
import { AndroidLogoIcon as AndroidLogoLightIcon } from "../light/AndroidLogo";
import { AndroidLogoIcon as AndroidLogoRegularIcon } from "../regular/AndroidLogo";
import { AndroidLogoIcon as AndroidLogoThinIcon } from "../thin/AndroidLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AndroidLogoThinIcon,
	light: AndroidLogoLightIcon,
	regular: AndroidLogoRegularIcon,
	bold: AndroidLogoBoldIcon,
	fill: AndroidLogoFillIcon,
	duotone: AndroidLogoDuotoneIcon,
} as const;

export function AndroidLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AndroidLogoIcon as AndroidLogo };
