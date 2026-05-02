import { StackOverflowLogoIcon as StackOverflowLogoBoldIcon } from "../bold/StackOverflowLogo";
import { StackOverflowLogoIcon as StackOverflowLogoDuotoneIcon } from "../duotone/StackOverflowLogo";
import { StackOverflowLogoIcon as StackOverflowLogoFillIcon } from "../fill/StackOverflowLogo";
import { StackOverflowLogoIcon as StackOverflowLogoLightIcon } from "../light/StackOverflowLogo";
import { StackOverflowLogoIcon as StackOverflowLogoRegularIcon } from "../regular/StackOverflowLogo";
import { StackOverflowLogoIcon as StackOverflowLogoThinIcon } from "../thin/StackOverflowLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StackOverflowLogoThinIcon,
	light: StackOverflowLogoLightIcon,
	regular: StackOverflowLogoRegularIcon,
	bold: StackOverflowLogoBoldIcon,
	fill: StackOverflowLogoFillIcon,
	duotone: StackOverflowLogoDuotoneIcon,
} as const;

export function StackOverflowLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StackOverflowLogoIcon as StackOverflowLogo };
