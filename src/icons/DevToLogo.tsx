import { DevToLogoIcon as DevToLogoBoldIcon } from "../bold/DevToLogo";
import { DevToLogoIcon as DevToLogoDuotoneIcon } from "../duotone/DevToLogo";
import { DevToLogoIcon as DevToLogoFillIcon } from "../fill/DevToLogo";
import { DevToLogoIcon as DevToLogoLightIcon } from "../light/DevToLogo";
import { DevToLogoIcon as DevToLogoRegularIcon } from "../regular/DevToLogo";
import { DevToLogoIcon as DevToLogoThinIcon } from "../thin/DevToLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DevToLogoThinIcon,
	light: DevToLogoLightIcon,
	regular: DevToLogoRegularIcon,
	bold: DevToLogoBoldIcon,
	fill: DevToLogoFillIcon,
	duotone: DevToLogoDuotoneIcon,
} as const;

export function DevToLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DevToLogoIcon as DevToLogo };
