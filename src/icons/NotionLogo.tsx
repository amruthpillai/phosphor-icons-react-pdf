import { NotionLogoIcon as NotionLogoBoldIcon } from "../bold/NotionLogo";
import { NotionLogoIcon as NotionLogoDuotoneIcon } from "../duotone/NotionLogo";
import { NotionLogoIcon as NotionLogoFillIcon } from "../fill/NotionLogo";
import { NotionLogoIcon as NotionLogoLightIcon } from "../light/NotionLogo";
import { NotionLogoIcon as NotionLogoRegularIcon } from "../regular/NotionLogo";
import { NotionLogoIcon as NotionLogoThinIcon } from "../thin/NotionLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotionLogoThinIcon,
	light: NotionLogoLightIcon,
	regular: NotionLogoRegularIcon,
	bold: NotionLogoBoldIcon,
	fill: NotionLogoFillIcon,
	duotone: NotionLogoDuotoneIcon,
} as const;

export function NotionLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotionLogoIcon as NotionLogo };
