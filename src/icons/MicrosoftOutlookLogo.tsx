import { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogoBoldIcon } from "../bold/MicrosoftOutlookLogo";
import { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogoDuotoneIcon } from "../duotone/MicrosoftOutlookLogo";
import { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogoFillIcon } from "../fill/MicrosoftOutlookLogo";
import { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogoLightIcon } from "../light/MicrosoftOutlookLogo";
import { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogoRegularIcon } from "../regular/MicrosoftOutlookLogo";
import { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogoThinIcon } from "../thin/MicrosoftOutlookLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrosoftOutlookLogoThinIcon,
	light: MicrosoftOutlookLogoLightIcon,
	regular: MicrosoftOutlookLogoRegularIcon,
	bold: MicrosoftOutlookLogoBoldIcon,
	fill: MicrosoftOutlookLogoFillIcon,
	duotone: MicrosoftOutlookLogoDuotoneIcon,
} as const;

export function MicrosoftOutlookLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrosoftOutlookLogoIcon as MicrosoftOutlookLogo };
