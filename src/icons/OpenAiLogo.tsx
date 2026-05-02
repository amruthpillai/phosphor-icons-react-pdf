import { OpenAiLogoIcon as OpenAiLogoBoldIcon } from "../bold/OpenAiLogo";
import { OpenAiLogoIcon as OpenAiLogoDuotoneIcon } from "../duotone/OpenAiLogo";
import { OpenAiLogoIcon as OpenAiLogoFillIcon } from "../fill/OpenAiLogo";
import { OpenAiLogoIcon as OpenAiLogoLightIcon } from "../light/OpenAiLogo";
import { OpenAiLogoIcon as OpenAiLogoRegularIcon } from "../regular/OpenAiLogo";
import { OpenAiLogoIcon as OpenAiLogoThinIcon } from "../thin/OpenAiLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OpenAiLogoThinIcon,
	light: OpenAiLogoLightIcon,
	regular: OpenAiLogoRegularIcon,
	bold: OpenAiLogoBoldIcon,
	fill: OpenAiLogoFillIcon,
	duotone: OpenAiLogoDuotoneIcon,
} as const;

export function OpenAiLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OpenAiLogoIcon as OpenAiLogo };
