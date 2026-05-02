import { GoodreadsLogoIcon as GoodreadsLogoBoldIcon } from "../bold/GoodreadsLogo";
import { GoodreadsLogoIcon as GoodreadsLogoDuotoneIcon } from "../duotone/GoodreadsLogo";
import { GoodreadsLogoIcon as GoodreadsLogoFillIcon } from "../fill/GoodreadsLogo";
import { GoodreadsLogoIcon as GoodreadsLogoLightIcon } from "../light/GoodreadsLogo";
import { GoodreadsLogoIcon as GoodreadsLogoRegularIcon } from "../regular/GoodreadsLogo";
import { GoodreadsLogoIcon as GoodreadsLogoThinIcon } from "../thin/GoodreadsLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GoodreadsLogoThinIcon,
	light: GoodreadsLogoLightIcon,
	regular: GoodreadsLogoRegularIcon,
	bold: GoodreadsLogoBoldIcon,
	fill: GoodreadsLogoFillIcon,
	duotone: GoodreadsLogoDuotoneIcon,
} as const;

export function GoodreadsLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GoodreadsLogoIcon as GoodreadsLogo };
