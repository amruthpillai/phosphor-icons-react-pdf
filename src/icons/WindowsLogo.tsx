import { WindowsLogoIcon as WindowsLogoBoldIcon } from "../bold/WindowsLogo";
import { WindowsLogoIcon as WindowsLogoDuotoneIcon } from "../duotone/WindowsLogo";
import { WindowsLogoIcon as WindowsLogoFillIcon } from "../fill/WindowsLogo";
import { WindowsLogoIcon as WindowsLogoLightIcon } from "../light/WindowsLogo";
import { WindowsLogoIcon as WindowsLogoRegularIcon } from "../regular/WindowsLogo";
import { WindowsLogoIcon as WindowsLogoThinIcon } from "../thin/WindowsLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WindowsLogoThinIcon,
	light: WindowsLogoLightIcon,
	regular: WindowsLogoRegularIcon,
	bold: WindowsLogoBoldIcon,
	fill: WindowsLogoFillIcon,
	duotone: WindowsLogoDuotoneIcon,
} as const;

export function WindowsLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WindowsLogoIcon as WindowsLogo };
