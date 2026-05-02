import { WhatsappLogoIcon as WhatsappLogoBoldIcon } from "../bold/WhatsappLogo";
import { WhatsappLogoIcon as WhatsappLogoDuotoneIcon } from "../duotone/WhatsappLogo";
import { WhatsappLogoIcon as WhatsappLogoFillIcon } from "../fill/WhatsappLogo";
import { WhatsappLogoIcon as WhatsappLogoLightIcon } from "../light/WhatsappLogo";
import { WhatsappLogoIcon as WhatsappLogoRegularIcon } from "../regular/WhatsappLogo";
import { WhatsappLogoIcon as WhatsappLogoThinIcon } from "../thin/WhatsappLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WhatsappLogoThinIcon,
	light: WhatsappLogoLightIcon,
	regular: WhatsappLogoRegularIcon,
	bold: WhatsappLogoBoldIcon,
	fill: WhatsappLogoFillIcon,
	duotone: WhatsappLogoDuotoneIcon,
} as const;

export function WhatsappLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WhatsappLogoIcon as WhatsappLogo };
