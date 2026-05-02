import { SkypeLogoIcon as SkypeLogoBoldIcon } from "../bold/SkypeLogo";
import { SkypeLogoIcon as SkypeLogoDuotoneIcon } from "../duotone/SkypeLogo";
import { SkypeLogoIcon as SkypeLogoFillIcon } from "../fill/SkypeLogo";
import { SkypeLogoIcon as SkypeLogoLightIcon } from "../light/SkypeLogo";
import { SkypeLogoIcon as SkypeLogoRegularIcon } from "../regular/SkypeLogo";
import { SkypeLogoIcon as SkypeLogoThinIcon } from "../thin/SkypeLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SkypeLogoThinIcon,
	light: SkypeLogoLightIcon,
	regular: SkypeLogoRegularIcon,
	bold: SkypeLogoBoldIcon,
	fill: SkypeLogoFillIcon,
	duotone: SkypeLogoDuotoneIcon,
} as const;

export function SkypeLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SkypeLogoIcon as SkypeLogo };
