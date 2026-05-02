import { LinktreeLogoIcon as LinktreeLogoBoldIcon } from "../bold/LinktreeLogo";
import { LinktreeLogoIcon as LinktreeLogoDuotoneIcon } from "../duotone/LinktreeLogo";
import { LinktreeLogoIcon as LinktreeLogoFillIcon } from "../fill/LinktreeLogo";
import { LinktreeLogoIcon as LinktreeLogoLightIcon } from "../light/LinktreeLogo";
import { LinktreeLogoIcon as LinktreeLogoRegularIcon } from "../regular/LinktreeLogo";
import { LinktreeLogoIcon as LinktreeLogoThinIcon } from "../thin/LinktreeLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinktreeLogoThinIcon,
	light: LinktreeLogoLightIcon,
	regular: LinktreeLogoRegularIcon,
	bold: LinktreeLogoBoldIcon,
	fill: LinktreeLogoFillIcon,
	duotone: LinktreeLogoDuotoneIcon,
} as const;

export function LinktreeLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinktreeLogoIcon as LinktreeLogo };
