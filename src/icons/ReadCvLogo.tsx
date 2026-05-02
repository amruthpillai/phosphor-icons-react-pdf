import { ReadCvLogoIcon as ReadCvLogoBoldIcon } from "../bold/ReadCvLogo";
import { ReadCvLogoIcon as ReadCvLogoDuotoneIcon } from "../duotone/ReadCvLogo";
import { ReadCvLogoIcon as ReadCvLogoFillIcon } from "../fill/ReadCvLogo";
import { ReadCvLogoIcon as ReadCvLogoLightIcon } from "../light/ReadCvLogo";
import { ReadCvLogoIcon as ReadCvLogoRegularIcon } from "../regular/ReadCvLogo";
import { ReadCvLogoIcon as ReadCvLogoThinIcon } from "../thin/ReadCvLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ReadCvLogoThinIcon,
	light: ReadCvLogoLightIcon,
	regular: ReadCvLogoRegularIcon,
	bold: ReadCvLogoBoldIcon,
	fill: ReadCvLogoFillIcon,
	duotone: ReadCvLogoDuotoneIcon,
} as const;

export function ReadCvLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ReadCvLogoIcon as ReadCvLogo };
