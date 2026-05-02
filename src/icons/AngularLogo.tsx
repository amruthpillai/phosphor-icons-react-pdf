import { AngularLogoIcon as AngularLogoBoldIcon } from "../bold/AngularLogo";
import { AngularLogoIcon as AngularLogoDuotoneIcon } from "../duotone/AngularLogo";
import { AngularLogoIcon as AngularLogoFillIcon } from "../fill/AngularLogo";
import { AngularLogoIcon as AngularLogoLightIcon } from "../light/AngularLogo";
import { AngularLogoIcon as AngularLogoRegularIcon } from "../regular/AngularLogo";
import { AngularLogoIcon as AngularLogoThinIcon } from "../thin/AngularLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AngularLogoThinIcon,
	light: AngularLogoLightIcon,
	regular: AngularLogoRegularIcon,
	bold: AngularLogoBoldIcon,
	fill: AngularLogoFillIcon,
	duotone: AngularLogoDuotoneIcon,
} as const;

export function AngularLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AngularLogoIcon as AngularLogo };
