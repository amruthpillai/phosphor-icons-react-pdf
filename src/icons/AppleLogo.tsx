import { AppleLogoIcon as AppleLogoBoldIcon } from "../bold/AppleLogo";
import { AppleLogoIcon as AppleLogoDuotoneIcon } from "../duotone/AppleLogo";
import { AppleLogoIcon as AppleLogoFillIcon } from "../fill/AppleLogo";
import { AppleLogoIcon as AppleLogoLightIcon } from "../light/AppleLogo";
import { AppleLogoIcon as AppleLogoRegularIcon } from "../regular/AppleLogo";
import { AppleLogoIcon as AppleLogoThinIcon } from "../thin/AppleLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AppleLogoThinIcon,
	light: AppleLogoLightIcon,
	regular: AppleLogoRegularIcon,
	bold: AppleLogoBoldIcon,
	fill: AppleLogoFillIcon,
	duotone: AppleLogoDuotoneIcon,
} as const;

export function AppleLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AppleLogoIcon as AppleLogo };
