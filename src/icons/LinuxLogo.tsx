import { LinuxLogoIcon as LinuxLogoBoldIcon } from "../bold/LinuxLogo";
import { LinuxLogoIcon as LinuxLogoDuotoneIcon } from "../duotone/LinuxLogo";
import { LinuxLogoIcon as LinuxLogoFillIcon } from "../fill/LinuxLogo";
import { LinuxLogoIcon as LinuxLogoLightIcon } from "../light/LinuxLogo";
import { LinuxLogoIcon as LinuxLogoRegularIcon } from "../regular/LinuxLogo";
import { LinuxLogoIcon as LinuxLogoThinIcon } from "../thin/LinuxLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinuxLogoThinIcon,
	light: LinuxLogoLightIcon,
	regular: LinuxLogoRegularIcon,
	bold: LinuxLogoBoldIcon,
	fill: LinuxLogoFillIcon,
	duotone: LinuxLogoDuotoneIcon,
} as const;

export function LinuxLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinuxLogoIcon as LinuxLogo };
