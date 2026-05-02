import { MediumLogoIcon as MediumLogoBoldIcon } from "../bold/MediumLogo";
import { MediumLogoIcon as MediumLogoDuotoneIcon } from "../duotone/MediumLogo";
import { MediumLogoIcon as MediumLogoFillIcon } from "../fill/MediumLogo";
import { MediumLogoIcon as MediumLogoLightIcon } from "../light/MediumLogo";
import { MediumLogoIcon as MediumLogoRegularIcon } from "../regular/MediumLogo";
import { MediumLogoIcon as MediumLogoThinIcon } from "../thin/MediumLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MediumLogoThinIcon,
	light: MediumLogoLightIcon,
	regular: MediumLogoRegularIcon,
	bold: MediumLogoBoldIcon,
	fill: MediumLogoFillIcon,
	duotone: MediumLogoDuotoneIcon,
} as const;

export function MediumLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MediumLogoIcon as MediumLogo };
