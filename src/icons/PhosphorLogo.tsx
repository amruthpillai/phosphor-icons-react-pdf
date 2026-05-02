import { PhosphorLogoIcon as PhosphorLogoBoldIcon } from "../bold/PhosphorLogo";
import { PhosphorLogoIcon as PhosphorLogoDuotoneIcon } from "../duotone/PhosphorLogo";
import { PhosphorLogoIcon as PhosphorLogoFillIcon } from "../fill/PhosphorLogo";
import { PhosphorLogoIcon as PhosphorLogoLightIcon } from "../light/PhosphorLogo";
import { PhosphorLogoIcon as PhosphorLogoRegularIcon } from "../regular/PhosphorLogo";
import { PhosphorLogoIcon as PhosphorLogoThinIcon } from "../thin/PhosphorLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhosphorLogoThinIcon,
	light: PhosphorLogoLightIcon,
	regular: PhosphorLogoRegularIcon,
	bold: PhosphorLogoBoldIcon,
	fill: PhosphorLogoFillIcon,
	duotone: PhosphorLogoDuotoneIcon,
} as const;

export function PhosphorLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhosphorLogoIcon as PhosphorLogo };
