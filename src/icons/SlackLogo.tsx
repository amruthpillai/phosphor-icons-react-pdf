import { SlackLogoIcon as SlackLogoBoldIcon } from "../bold/SlackLogo";
import { SlackLogoIcon as SlackLogoDuotoneIcon } from "../duotone/SlackLogo";
import { SlackLogoIcon as SlackLogoFillIcon } from "../fill/SlackLogo";
import { SlackLogoIcon as SlackLogoLightIcon } from "../light/SlackLogo";
import { SlackLogoIcon as SlackLogoRegularIcon } from "../regular/SlackLogo";
import { SlackLogoIcon as SlackLogoThinIcon } from "../thin/SlackLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SlackLogoThinIcon,
	light: SlackLogoLightIcon,
	regular: SlackLogoRegularIcon,
	bold: SlackLogoBoldIcon,
	fill: SlackLogoFillIcon,
	duotone: SlackLogoDuotoneIcon,
} as const;

export function SlackLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SlackLogoIcon as SlackLogo };
