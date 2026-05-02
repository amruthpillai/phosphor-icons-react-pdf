import { MarkdownLogoIcon as MarkdownLogoBoldIcon } from "../bold/MarkdownLogo";
import { MarkdownLogoIcon as MarkdownLogoDuotoneIcon } from "../duotone/MarkdownLogo";
import { MarkdownLogoIcon as MarkdownLogoFillIcon } from "../fill/MarkdownLogo";
import { MarkdownLogoIcon as MarkdownLogoLightIcon } from "../light/MarkdownLogo";
import { MarkdownLogoIcon as MarkdownLogoRegularIcon } from "../regular/MarkdownLogo";
import { MarkdownLogoIcon as MarkdownLogoThinIcon } from "../thin/MarkdownLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MarkdownLogoThinIcon,
	light: MarkdownLogoLightIcon,
	regular: MarkdownLogoRegularIcon,
	bold: MarkdownLogoBoldIcon,
	fill: MarkdownLogoFillIcon,
	duotone: MarkdownLogoDuotoneIcon,
} as const;

export function MarkdownLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MarkdownLogoIcon as MarkdownLogo };
