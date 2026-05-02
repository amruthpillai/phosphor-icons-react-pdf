import { PatreonLogoIcon as PatreonLogoBoldIcon } from "../bold/PatreonLogo";
import { PatreonLogoIcon as PatreonLogoDuotoneIcon } from "../duotone/PatreonLogo";
import { PatreonLogoIcon as PatreonLogoFillIcon } from "../fill/PatreonLogo";
import { PatreonLogoIcon as PatreonLogoLightIcon } from "../light/PatreonLogo";
import { PatreonLogoIcon as PatreonLogoRegularIcon } from "../regular/PatreonLogo";
import { PatreonLogoIcon as PatreonLogoThinIcon } from "../thin/PatreonLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PatreonLogoThinIcon,
	light: PatreonLogoLightIcon,
	regular: PatreonLogoRegularIcon,
	bold: PatreonLogoBoldIcon,
	fill: PatreonLogoFillIcon,
	duotone: PatreonLogoDuotoneIcon,
} as const;

export function PatreonLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PatreonLogoIcon as PatreonLogo };
