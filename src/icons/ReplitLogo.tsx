import { ReplitLogoIcon as ReplitLogoBoldIcon } from "../bold/ReplitLogo";
import { ReplitLogoIcon as ReplitLogoDuotoneIcon } from "../duotone/ReplitLogo";
import { ReplitLogoIcon as ReplitLogoFillIcon } from "../fill/ReplitLogo";
import { ReplitLogoIcon as ReplitLogoLightIcon } from "../light/ReplitLogo";
import { ReplitLogoIcon as ReplitLogoRegularIcon } from "../regular/ReplitLogo";
import { ReplitLogoIcon as ReplitLogoThinIcon } from "../thin/ReplitLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ReplitLogoThinIcon,
	light: ReplitLogoLightIcon,
	regular: ReplitLogoRegularIcon,
	bold: ReplitLogoBoldIcon,
	fill: ReplitLogoFillIcon,
	duotone: ReplitLogoDuotoneIcon,
} as const;

export function ReplitLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ReplitLogoIcon as ReplitLogo };
