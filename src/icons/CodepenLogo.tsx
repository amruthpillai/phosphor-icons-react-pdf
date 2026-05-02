import { CodepenLogoIcon as CodepenLogoBoldIcon } from "../bold/CodepenLogo";
import { CodepenLogoIcon as CodepenLogoDuotoneIcon } from "../duotone/CodepenLogo";
import { CodepenLogoIcon as CodepenLogoFillIcon } from "../fill/CodepenLogo";
import { CodepenLogoIcon as CodepenLogoLightIcon } from "../light/CodepenLogo";
import { CodepenLogoIcon as CodepenLogoRegularIcon } from "../regular/CodepenLogo";
import { CodepenLogoIcon as CodepenLogoThinIcon } from "../thin/CodepenLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CodepenLogoThinIcon,
	light: CodepenLogoLightIcon,
	regular: CodepenLogoRegularIcon,
	bold: CodepenLogoBoldIcon,
	fill: CodepenLogoFillIcon,
	duotone: CodepenLogoDuotoneIcon,
} as const;

export function CodepenLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CodepenLogoIcon as CodepenLogo };
