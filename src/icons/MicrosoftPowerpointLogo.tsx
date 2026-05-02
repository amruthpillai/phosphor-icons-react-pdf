import { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogoBoldIcon } from "../bold/MicrosoftPowerpointLogo";
import { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogoDuotoneIcon } from "../duotone/MicrosoftPowerpointLogo";
import { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogoFillIcon } from "../fill/MicrosoftPowerpointLogo";
import { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogoLightIcon } from "../light/MicrosoftPowerpointLogo";
import { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogoRegularIcon } from "../regular/MicrosoftPowerpointLogo";
import { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogoThinIcon } from "../thin/MicrosoftPowerpointLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrosoftPowerpointLogoThinIcon,
	light: MicrosoftPowerpointLogoLightIcon,
	regular: MicrosoftPowerpointLogoRegularIcon,
	bold: MicrosoftPowerpointLogoBoldIcon,
	fill: MicrosoftPowerpointLogoFillIcon,
	duotone: MicrosoftPowerpointLogoDuotoneIcon,
} as const;

export function MicrosoftPowerpointLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrosoftPowerpointLogoIcon as MicrosoftPowerpointLogo };
